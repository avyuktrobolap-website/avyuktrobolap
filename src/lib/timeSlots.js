import { format, isAfter, startOfDay, parseISO } from 'date-fns';

// ─── Clinic hours ────────────────────────────────────────────────────────────
// Mon–Sat: 10:00 – 19:30  (each slot = 30 min)
// Sunday: closed

const CLINIC_HOURS = [
  '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Returns true if the date string is today or a future date,
 * AND is not a Sunday.
 */
export function isDateValid(dateStr) {
  if (!dateStr) return false;
  const date = parseISO(dateStr);
  const today = startOfDay(new Date());

  // Block past dates
  if (!isAfter(date, today) && format(date, 'yyyy-MM-dd') !== format(today, 'yyyy-MM-dd')) {
    return false;
  }

  // Block Sundays (0 = Sunday)
  if (date.getDay() === 0) return false;

  return true;
}

/**
 * Generates an array of time slot objects for a given date,
 * marking slots as disabled if already booked or in the past.
 *
 * @param {string} dateStr       - 'yyyy-MM-dd'
 * @param {Array}  existingBookings - array of booking objects with .timeSlot
 * @param {Array}  closures      - array of closure objects with .startTime / .endTime
 */
export function generateTimeSlots(dateStr, existingBookings = [], closures = []) {
  const now = new Date();
  const selectedDate = parseISO(dateStr);
  const isToday = format(selectedDate, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd');

  return CLINIC_HOURS.map((slot) => {
    const [h, m] = slot.split(':').map(Number);
    const slotTime = new Date(selectedDate);
    slotTime.setHours(h, m, 0, 0);

    // Disable if slot is in the past (only relevant for today)
    const isPast = isToday && slotTime <= now;

    // Disable if within a closure window
    const isClosed = closures.some((c) => {
      const [ch, cm] = c.startTime.split(':').map(Number);
      const [eh, em] = c.endTime.split(':').map(Number);
      const closureStart = new Date(selectedDate);
      closureStart.setHours(ch, cm, 0, 0);
      const closureEnd = new Date(selectedDate);
      closureEnd.setHours(eh, em, 0, 0);
      return slotTime >= closureStart && slotTime < closureEnd;
    });

    let reason = '';
    if (isPast) reason = 'past';
    else if (isClosed) reason = 'unavailable';

    return {
      value: slot,
      disabled: isPast || isClosed,
      reason,
    };
  });
}
