'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  eachDayOfInterval,
  isSameDay,
  isSameMonth,
  isBefore,
  startOfDay,
  parseISO,
} from 'date-fns';

/**
 * Custom cross-browser date picker (no native <input type="date">).
 *
 * Props:
 *  - value        : 'yyyy-MM-dd' string
 *  - onChange      : (dateStr: string) => void
 *  - min           : 'yyyy-MM-dd' string (optional) — earliest selectable date
 *  - disabledDays  : number[] (optional) — day indices to block (0=Sun … 6=Sat)
 *  - inputClass    : string — Tailwind classes for the trigger input
 *  - id            : string
 *  - name          : string
 *  - placeholder   : string
 *  - required      : boolean
 */
export default function DatePicker({
  value,
  onChange,
  min,
  disabledDays = [],
  inputClass = '',
  id,
  name,
  placeholder = 'Select date',
  required,
}) {
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(() => {
    if (value) return startOfMonth(parseISO(value));
    if (min) return startOfMonth(parseISO(min));
    return startOfMonth(new Date());
  });
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  // Update view month when value changes externally
  useEffect(() => {
    if (value) setViewMonth(startOfMonth(parseISO(value)));
  }, [value]);

  // ── Build calendar grid ──────────────────────────────────────────────────
  const monthStart = startOfMonth(viewMonth);
  const monthEnd = endOfMonth(viewMonth);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: gridStart, end: gridEnd });

  const minDate = min ? startOfDay(parseISO(min)) : null;

  const isDisabled = useCallback(
    (day) => {
      if (minDate && isBefore(day, minDate)) return true;
      if (disabledDays.includes(day.getDay())) return true;
      return false;
    },
    [minDate, disabledDays]
  );

  const handleSelect = (day) => {
    if (isDisabled(day)) return;
    onChange(format(day, 'yyyy-MM-dd'));
    setOpen(false);
  };

  const displayValue = value
    ? format(parseISO(value), 'dd MMM yyyy')
    : '';

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger — looks like a text input */}
      <button
        type="button"
        id={id}
        onClick={() => setOpen((p) => !p)}
        className={`${inputClass} text-left cursor-pointer flex items-center justify-between`}
        suppressHydrationWarning={true}
      >
        <span className={value ? 'text-white' : 'text-white/25'}>
          {displayValue || placeholder}
        </span>
        {/* Calendar icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white/30 shrink-0"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </button>

      {/* Hidden native input for form submission (react-hook-form) */}
      <input
        type="hidden"
        name={name}
        value={value || ''}
        required={required}
      />

      {/* Dropdown calendar */}
      {open && (
        <div
          className="absolute z-50 mt-2 left-0 w-[300px] bg-[#0e1526] border border-white/10
                     shadow-2xl shadow-black/40 p-4 select-none animate-[fadeIn_0.15s_ease-out]"
          style={{ animationFillMode: 'forwards' }}
        >
          {/* Month nav */}
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={() => setViewMonth((m) => subMonths(m, 1))}
              className="text-white/50 hover:text-white p-1 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <span className="text-white text-[13px] font-semibold tracking-wide">
              {format(viewMonth, 'MMMM yyyy')}
            </span>
            <button
              type="button"
              onClick={() => setViewMonth((m) => addMonths(m, 1))}
              className="text-white/50 hover:text-white p-1 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>

          {/* Day headers (Mon–Sun) */}
          <div className="grid grid-cols-7 gap-0 mb-1">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
              <div
                key={d}
                className="text-center text-white/30 text-[10px] tracking-wider uppercase py-1"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-0">
            {days.map((day) => {
              const inMonth = isSameMonth(day, viewMonth);
              const selected = value && isSameDay(day, parseISO(value));
              const disabled = isDisabled(day);
              const isToday = isSameDay(day, new Date());

              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  disabled={disabled || !inMonth}
                  onClick={() => handleSelect(day)}
                  className={`
                    w-full aspect-square flex items-center justify-center text-[13px]
                    rounded-sm transition-all duration-150 cursor-pointer
                    ${!inMonth ? 'text-white/10 cursor-default' : ''}
                    ${inMonth && !disabled && !selected ? 'text-white/70 hover:bg-[#F5B800]/15 hover:text-white' : ''}
                    ${inMonth && disabled ? 'text-white/15 cursor-not-allowed line-through' : ''}
                    ${selected ? 'bg-[#F5B800] text-[#080d1a] font-bold' : ''}
                    ${isToday && !selected ? 'ring-1 ring-inset ring-[#F5B800]/40' : ''}
                  `}
                >
                  {format(day, 'd')}
                </button>
              );
            })}
          </div>

          {/* Today shortcut */}
          <div className="mt-3 pt-3 border-t border-white/[0.06] flex justify-center">
            <button
              type="button"
              onClick={() => {
                const today = new Date();
                if (!isDisabled(today)) {
                  handleSelect(today);
                } else {
                  setViewMonth(startOfMonth(today));
                }
              }}
              className="text-[#F5B800] text-[11px] tracking-[0.18em] uppercase hover:underline cursor-pointer"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
