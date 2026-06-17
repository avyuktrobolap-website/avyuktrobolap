'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookingSchema } from '@/lib/bookingSchema';
import { generateTimeSlots, isDateValid } from '@/lib/timeSlots';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import DatePicker from '@/components/ui/DatePicker';

// ─── Helper: format "09:30" → "9:30 AM – 10:00 AM" ──────────────────────────
function formatSlotRange(start) {
  const [h, m] = start.split(':').map(Number);
  const startDate = new Date();
  startDate.setHours(h, m, 0, 0);
  const endDate = new Date(startDate);
  endDate.setMinutes(endDate.getMinutes() + 30);
  const fmt = (d) =>
    d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });
  return `${fmt(startDate)} – ${fmt(endDate)}`;
}

// ─── Reusable field wrapper ───────────────────────────────────────────────────
function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white/70 text-[11px] tracking-[0.2em] uppercase font-medium">
        {label} {required && <span className="text-[#F5B800]">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-400 text-[12px] tracking-wide">{error}</p>
      )}
    </div>
  );
}

// ─── Shared input class ───────────────────────────────────────────────────────
const inputClass = (hasError) =>
  `w-full bg-white/[0.04] border ${
    hasError ? 'border-red-500/60' : 'border-white/10'
  } text-white placeholder-white/25 text-[14px] px-4 py-3 outline-none
   focus:border-[#F5B800]/60 focus:bg-white/[0.07] transition-all duration-200`;

// ─── Main component ───────────────────────────────────────────────────────────
export default function BookingForm() {
  const [timeSlots, setTimeSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [existingBookings, setExistingBookings] = useState([]);
  const [closures, setClosures] = useState([]);
  const [todayStr, setTodayStr] = useState('');

  // Compute today's date client-side only to avoid SSR hydration mismatch
  useEffect(() => {
    setTodayStr(format(new Date(), 'yyyy-MM-dd'));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(bookingSchema) });

  const watchedDate = watch('date');

  // ── Fetch existing bookings & closures when date changes ──────────────────
  useEffect(() => {
    if (watchedDate && isDateValid(watchedDate)) {
      Promise.all([
        fetch(`/api/bookings?date=${watchedDate}`).then((r) => r.json()),
        fetch(`/api/clinic-closures?date=${watchedDate}`)
          .then((r) => r.json())
          .catch(() => []),
      ])
        .then(([bookingData, closureData]) => {
          setExistingBookings(bookingData.bookings || []);
          setClosures(closureData || []);
        })
        .catch(console.error);
    } else {
      setExistingBookings([]);
      setClosures([]);
    }
  }, [watchedDate]);

  // ── Regenerate time slots whenever bookings / closures update ─────────────
  useEffect(() => {
    if (watchedDate && isDateValid(watchedDate)) {
      setTimeSlots(generateTimeSlots(watchedDate, existingBookings, closures));
    } else {
      setTimeSlots([]);
    }
  }, [watchedDate, existingBookings, closures]);

  // ── Form submission ────────────────────────────────────────────────────────
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Appointment booked! We will contact you shortly.' });
        reset();
        setTimeSlots([]);
        setExistingBookings([]);
      } else {
        setSubmitMessage({ type: 'error', text: result.error || 'Booking failed. Please try again.' });
      }
    } catch {
      setSubmitMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const allSlotsDisabled = timeSlots.length > 0 && timeSlots.every((s) => s.disabled);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-3">
        <div className="inline-flex items-center gap-2">
          <span className="w-[6px] h-[6px] rounded-full bg-[#F5B800]" />
          <span className="text-[#F5B800] text-[11px] tracking-[0.22em] uppercase font-medium">
            Consultation Request
          </span>
        </div>
        <h1
          className="text-white text-3xl sm:text-4xl font-bold leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Book an Appointment
        </h1>
        <p className="text-white/50 text-[14px] leading-relaxed">
          Fill in your details below and we will confirm your slot with Dr. Abhishek Jaimalani.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] mb-8" />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

        {/* Patient Name */}
        <Field label="Patient Name" required error={errors.patientName?.message}>
          <input
            type="text"
            id="patientName"
            {...register('patientName')}
            placeholder="Full name of the patient"
            className={inputClass(!!errors.patientName)}
            suppressHydrationWarning={true}
          />
        </Field>

        {/* Mobile Number */}
        <Field label="Mobile Number" required error={errors.mobile?.message}>
          <input
            type="tel"
            id="mobile"
            {...register('mobile')}
            placeholder="10-digit mobile number"
            maxLength={10}
            className={inputClass(!!errors.mobile)}
            suppressHydrationWarning={true}
          />
        </Field>

        {/* Email (optional) */}
        <Field label="Email Address" error={errors.email?.message}>
          <input
            type="email"
            id="email"
            {...register('email')}
            placeholder="Optional – for appointment confirmation"
            className={inputClass(!!errors.email)}
            suppressHydrationWarning={true}
          />
        </Field>

        {/* Date */}
        <Field label="Preferred Date" required error={errors.date?.message}>
          <DatePicker
            id="date"
            name="date"
            value={watchedDate || ''}
            onChange={(dateStr) => setValue('date', dateStr, { shouldValidate: true })}
            min={todayStr}
            disabledDays={[0]}
            placeholder="Select a date"
            required
            inputClass={inputClass(!!errors.date)}
          />
          {watchedDate && !isDateValid(watchedDate) && (
            <p className="text-amber-400 text-[12px] tracking-wide">
              Please select a valid future date (clinic is closed on Sundays).
            </p>
          )}
        </Field>

        {/* Time Slot — shown only after a valid date is picked */}
        {watchedDate && isDateValid(watchedDate) && (
          <Field label="Time Slot" required error={errors.timeSlot?.message}>
            {timeSlots.length === 0 ? (
              <p className="text-white/30 text-[13px] tracking-wide animate-pulse">
                Loading available slots…
              </p>
            ) : (
              <>
                <select
                  id="timeSlot"
                  {...register('timeSlot')}
                  className={`${inputClass(!!errors.timeSlot)} cursor-pointer`}
                  suppressHydrationWarning={true}
                >
                  <option value="" className="bg-[#080d1a]">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option
                      key={slot.value}
                      value={slot.value}
                      disabled={slot.disabled}
                      className="bg-[#080d1a]"
                    >
                      {formatSlotRange(slot.value)}
                      {slot.reason ? ` — ${slot.reason}` : ''}
                    </option>
                  ))}
                </select>
                {allSlotsDisabled && (
                  <p className="text-amber-400 text-[12px] tracking-wide">
                    All slots are booked for this date. Please choose another date.
                  </p>
                )}
              </>
            )}
          </Field>
        )}

        {/* Description */}
        <Field label="Reason for Visit" required error={errors.description?.message}>
          <textarea
            id="description"
            {...register('description')}
            rows={4}
            placeholder="Briefly describe your symptoms, condition, or the treatment you are seeking…"
            className={`${inputClass(!!errors.description)} resize-none`}
            suppressHydrationWarning={true}
          />
        </Field>

        {/* Submit message */}
        {submitMessage && (
          <div
            className={`px-5 py-4 border text-[13px] tracking-wide ${
              submitMessage.type === 'success'
                ? 'border-[#F5B800]/30 bg-[#F5B800]/10 text-[#F5B800]'
                : 'border-red-500/30 bg-red-500/10 text-red-400'
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || allSlotsDisabled}
          className="mt-2 bg-[#F5B800] text-[#080d1a] text-[12px] tracking-[0.2em] font-bold uppercase px-8 py-4
                     hover:bg-[#F5B800]/90 transition-colors duration-200 cursor-pointer border-none
                     disabled:opacity-40 disabled:cursor-not-allowed w-full"
          suppressHydrationWarning={true}
        >
          {isSubmitting ? 'Booking…' : 'Confirm Appointment'}
        </button>
      </form>
    </div>
  );
}
