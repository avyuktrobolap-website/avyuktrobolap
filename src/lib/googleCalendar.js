import { google } from 'googleapis';

/* =========================
   CREATE 30 MIN SLOT (IST)
========================= */
function create30MinSlot(date, timeSlot) {
  // date = "2026-06-20", timeSlot = "10:00"
  const start = new Date(`${date}T${timeSlot}:00+05:30`);
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  return { startTime: start.toISOString(), endTime: end.toISOString() };
}

/* =========================
   GOOGLE AUTH
========================= */
const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/calendar'],
});

const calendar = google.calendar({ version: 'v3', auth });

/* =========================
   ADD EVENT TO CALENDAR
========================= */
export async function addEventToCalendar(booking) {
  const { startTime, endTime } = create30MinSlot(booking.date, booking.timeSlot);

  console.log(`📅 Syncing to Google Calendar [${process.env.GOOGLE_CALENDAR_ID}] — ${booking.date} ${booking.timeSlot}`);

  const res = await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
    requestBody: {
      summary: `🩺 Appointment – ${booking.patientName}`,
      description: `Patient: ${booking.patientName}
Mobile: ${booking.mobile}${booking.email ? `\nEmail: ${booking.email}` : ''}
Reason: ${booking.description}`,
      start: { dateTime: startTime, timeZone: 'Asia/Kolkata' },
      end: { dateTime: endTime, timeZone: 'Asia/Kolkata' },
    },
  });

  console.log(`✅ Calendar event created: ${res.data.id}`);
  return res;
}

/* =========================
   REMOVE EVENT FROM CALENDAR
========================= */
export async function removeEventFromCalendar(eventId) {
  if (!eventId) return;
  try {
    await calendar.events.delete({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      eventId,
    });
    console.log('Calendar event deleted:', eventId);
  } catch (error) {
    console.error('Failed to delete calendar event:', error.message);
  }
}
