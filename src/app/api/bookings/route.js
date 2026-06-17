export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/bookingSchema';
import { generateTimeSlots, isDateValid } from '@/lib/timeSlots';
import { getBookingsByDate, createBooking, getAllBookingsForAdmin } from '@/lib/bookings';
import { addEventToCalendar } from '@/lib/googleCalendar';
import connectDB from '@/lib/db';
import Booking from '@/models/Booking';
import { parse, addMinutes } from 'date-fns';

/* =========================
   GET — fetch bookings for a date
   /api/bookings?date=yyyy-MM-dd
========================= */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      const allBookings = await getAllBookingsForAdmin();
      console.log('Admin fetching all bookings, count:', allBookings.length);
      return NextResponse.json({ bookings: allBookings });
    }

    const bookings = await getBookingsByDate(date);
    return NextResponse.json({ bookings });
  } catch (error) {
    console.error('GET /api/bookings error:', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}

/* =========================
   POST — create a new booking
========================= */
export async function POST(request) {
  try {
    const body = await request.json();

    /* ✅ YUP VALIDATION */
    await bookingSchema.validate(body, { abortEarly: false });

    /* 📅 DATE VALIDITY */
    if (!isDateValid(body.date)) {
      return NextResponse.json(
        { error: 'Please select a valid future date (clinic is closed on Sundays)' },
        { status: 400 }
      );
    }

    const selectedDate = new Date(body.date);
    const bookingStart = parse(body.timeSlot, 'HH:mm', selectedDate);
    const bookingEnd = addMinutes(bookingStart, 30);
    const now = new Date();

    /* 🚫 PAST SLOT */
    if (selectedDate.toDateString() === now.toDateString() && bookingStart <= now) {
      return NextResponse.json(
        { error: 'You cannot book a past time slot' },
        { status: 400 }
      );
    }

    /* 🚫 CONFLICT CHECK REMOVED — multiple patients allowed per slot */

    /* ✅ VALID SLOT CHECK */
    const slots = generateTimeSlots(body.date, [], []);
    const isValidSlot = slots.some((s) => s.value === body.timeSlot && !s.disabled);

    if (!isValidSlot) {
      return NextResponse.json(
        { error: 'Invalid or unavailable time slot selected' },
        { status: 400 }
      );
    }

    /* ✅ SAVE TO DB */
    const booking = await createBooking({
      patientName: body.patientName,
      mobile: body.mobile,
      email: body.email || null,
      date: body.date,
      timeSlot: body.timeSlot,
      description: body.description,
    });

    /* 🗓️ SYNC TO GOOGLE CALENDAR */
    try {
      const calRes = await addEventToCalendar(booking);

      await connectDB();
      await Booking.findByIdAndUpdate(booking.id, {
        calendarSynced: true,
        calendarEventId: calRes.data.id,
      });
    } catch (calErr) {
      // Calendar sync is non-blocking — booking is still saved
      console.error('Google Calendar sync failed (booking still saved):', calErr.message);
    }

    return NextResponse.json(
      { message: 'Booking created successfully', booking },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/bookings error:', error);

    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { error: error.errors?.[0] || 'Validation failed' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Failed to create booking' },
      { status: 500 }
    );
  }
}
