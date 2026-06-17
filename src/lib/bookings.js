import connectDB from './db';
import Booking from '@/models/Booking';

// ─── Get all bookings for a specific date ─────────────────────────────────────
export async function getBookingsByDate(date) {
  try {
    await connectDB();
    const normalizedDate = new Date(date).toISOString().split('T')[0];
    const bookings = await Booking.find({ date: normalizedDate }).sort({ timeSlot: 1 });
    return bookings.map(toPlain);
  } catch (error) {
    console.error('Error fetching bookings by date:', error);
    throw error;
  }
}

// ─── Get all bookings (admin) ──────────────────────────────────────────────────
export async function getAllBookingsForAdmin() {
  try {
    await connectDB();
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    return bookings.map(toPlain);
  } catch (error) {
    console.error('Error fetching admin bookings:', error);
    throw error;
  }
}

// ─── Create a booking ─────────────────────────────────────────────────────────
export async function createBooking(data) {
  try {
    await connectDB();
    const booking = new Booking(data);
    const saved = await booking.save();
    return toPlain(saved);
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
}

// ─── Delete a booking ─────────────────────────────────────────────────────────
export async function deleteBooking(id) {
  try {
    await connectDB();
    const result = await Booking.findByIdAndDelete(id);
    return !!result;
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
}

// ─── Serialize Mongoose doc to plain object ────────────────────────────────────
function toPlain(doc) {
  return {
    id: doc._id.toString(),
    patientName: doc.patientName,
    mobile: doc.mobile,
    email: doc.email || null,
    date: doc.date,
    timeSlot: doc.timeSlot,
    description: doc.description,
    calendarSynced: doc.calendarSynced,
    calendarEventId: doc.calendarEventId || null,
    createdAt: doc.createdAt?.toISOString() || new Date().toISOString(),
  };
}
