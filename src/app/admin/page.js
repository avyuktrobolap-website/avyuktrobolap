'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DatePicker from '@/components/ui/DatePicker';

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatSlot(slot) {
  const [h, m] = slot.split(':').map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
}

// ─── Password Gate ─────────────────────────────────────────────────────────────
function PasswordGate({ onSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok) {
        sessionStorage.setItem('admin_auth', '1');
        onSuccess();
      } else {
        setError(data?.error || 'Incorrect password. Try again.');
      }
    } catch (err) {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080d1a] flex items-center justify-center px-6">
      <div className="w-full max-w-sm flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="w-2 h-2 rounded-full bg-[#F5B800]" />
          <h1
            className="text-white text-3xl font-bold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Admin Access
          </h1>
          <p className="text-white/40 text-[13px] tracking-wide">
            Enter the admin password to continue
          </p>
        </div>

        <div className="h-px bg-white/[0.06]" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            suppressHydrationWarning
            className="w-full bg-white/[0.04] border border-white/10 text-white placeholder-white/25
                       text-[14px] px-4 py-3 outline-none focus:border-[#F5B800]/60
                       focus:bg-white/[0.07] transition-all duration-200"
          />

          {error && (
            <p className="text-red-400 text-[12px] tracking-wide">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-[#F5B800] text-[#080d1a] text-[12px] tracking-[0.2em] font-bold uppercase
                       px-8 py-4 rounded-sm hover:bg-[#ffc61a] active:scale-[0.98]
                       transition-all duration-200 shadow-[0_0_24px_rgba(245,184,0,0.25)]
                       disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? 'Verifying…' : 'Enter'}
          </button>
        </form>
      </div>
    </main>
  );
}

// ─── Booking Card (mobile) ─────────────────────────────────────────────────────
function BookingCard({ booking, index }) {
  const b = booking;
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-sm p-4 flex flex-col gap-3">
      {/* Top row: number + name + calendar status */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-white/25 text-[11px] font-mono">#{index + 1}</span>
          <span className="text-white text-[14px] font-semibold">{b.patientName}</span>
        </div>
        {b.calendarSynced ? (
          <span className="inline-flex items-center gap-1 text-emerald-400 text-[10px] tracking-wide shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Synced
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-white/30 text-[10px] tracking-wide shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            Pending
          </span>
        )}
      </div>

      {/* Date + Time */}
      <div className="flex items-center gap-3">
        <span className="text-white/60 text-[12px]">{formatDate(b.date)}</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span className="text-[#F5B800] text-[12px] font-medium">{formatSlot(b.timeSlot)}</span>
      </div>

      {/* Contact row */}
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <a
          href={`tel:${b.mobile}`}
          className="text-white/60 text-[12px] hover:text-white transition-colors"
        >
          📞 {b.mobile}
        </a>
        {b.email && (
          <span className="text-white/40 text-[12px] truncate max-w-[200px]">✉ {b.email}</span>
        )}
      </div>

      {/* Reason */}
      {b.description && (
        <p className="text-white/40 text-[12px] leading-relaxed line-clamp-2 border-t border-white/[0.05] pt-2">
          {b.description}
        </p>
      )}
    </div>
  );
}

// ─── Bookings Table (desktop) ──────────────────────────────────────────────────
function BookingsTable({ bookings }) {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-20 text-white/30 text-[14px] tracking-wide">
        No bookings found.
      </div>
    );
  }

  return (
    <>
      {/* ── Desktop table (md+) ── */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/[0.08]">
              {['#', 'Patient', 'Mobile', 'Email', 'Date', 'Time Slot', 'Reason', 'Calendar'].map((h) => (
                <th
                  key={h}
                  className="pb-3 pr-6 text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr
                key={b.id}
                className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors duration-150"
              >
                <td className="py-4 pr-6 text-white/30 text-[12px]">{i + 1}</td>
                <td className="py-4 pr-6 text-white text-[13px] font-medium whitespace-nowrap">
                  {b.patientName}
                </td>
                <td className="py-4 pr-6 text-white/70 text-[13px] whitespace-nowrap">{b.mobile}</td>
                <td className="py-4 pr-6 text-white/50 text-[12px]">{b.email || '—'}</td>
                <td className="py-4 pr-6 text-white/70 text-[13px] whitespace-nowrap">
                  {formatDate(b.date)}
                </td>
                <td className="py-4 pr-6 whitespace-nowrap">
                  <span className="text-[#F5B800] text-[12px] font-medium tracking-wide">
                    {formatSlot(b.timeSlot)}
                  </span>
                </td>
                <td className="py-4 pr-6 text-white/50 text-[12px] max-w-[200px] truncate">
                  {b.description}
                </td>
                <td className="py-4 pr-6">
                  {b.calendarSynced ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 text-[11px] tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Synced
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-white/30 text-[11px] tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      Pending
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile cards (< md) ── */}
      <div className="flex flex-col gap-3 md:hidden">
        {bookings.map((b, i) => (
          <BookingCard key={b.id} booking={b} index={i} />
        ))}
      </div>
    </>
  );
}

// ─── Main Admin Page ───────────────────────────────────────────────────────────
export default function AdminPage() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);

  // ── Clinic Closure state ──────────────────────────────────────────────────
  const [closureDate, setClosureDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [closureReason, setClosureReason] = useState('');
  const [closing, setClosing] = useState(false);
  const [closures, setClosures] = useState([]);
  const [closureError, setClosureError] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === '1') {
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetchBookings();
    fetchClosures();
  }, [authed]);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings');
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch (err) {
      console.error('Failed to fetch bookings:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCalendarSync = async () => {
    setSyncing(true);
    try {
      const res = await fetch('/api/sync-calendar', { method: 'POST' });
      const data = await res.json();
      console.log('Calendar sync response:', data);
      await fetchBookings();
    } catch (err) {
      console.error('Calendar sync error:', err.message);
    } finally {
      setSyncing(false);
    }
  };

  const fetchClosures = async () => {
    try {
      const res = await fetch('/api/clinic-closures');
      const data = await res.json();
      setClosures(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Failed to fetch closures:', err.message);
    }
  };

  const handleCloseClinic = async (e) => {
    e.preventDefault();
    setClosureError('');

    const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
    if (toMin(startTime) >= toMin(endTime)) {
      setClosureError('Start time must be before end time');
      return;
    }

    try {
      setClosing(true);
      const res = await fetch('/api/clinic-closures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: closureDate, startTime, endTime, reason: closureReason }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setClosureDate('');
      setStartTime('');
      setEndTime('');
      setClosureReason('');
      await fetchClosures();
    } catch (err) {
      setClosureError(err.message);
    } finally {
      setClosing(false);
    }
  };

  const handleDeleteClosure = async (id) => {
    if (!confirm('Remove this closure?')) return;
    try {
      await fetch(`/api/clinic-closures?id=${id}`, { method: 'DELETE' });
      await fetchClosures();
    } catch (err) {
      console.error('Delete closure error:', err.message);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setAuthed(false);
    setBookings([]);
    router.push('/');
  };

  if (!authed) {
    return <PasswordGate onSuccess={() => setAuthed(true)} />;
  }

  return (
    <main className="min-h-screen bg-[#080d1a]">
      {/* ── Header ── */}
      <div className="border-b border-white/[0.06] bg-[#050a14]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 h-[60px] md:h-[70px] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-[6px] h-[6px] rounded-full bg-[#F5B800] shrink-0" />
            <span
              className="text-[#F5B800] font-bold tracking-[0.1em] text-[13px] md:text-[15px] uppercase"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Admin Dashboard
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/70 hover:text-white text-[11px] tracking-[0.15em] uppercase
                       transition-all duration-200 bg-white/[0.06] hover:bg-white/[0.12]
                       border border-white/[0.12] hover:border-white/30
                       px-3 py-1.5 md:px-4 md:py-2 rounded-sm cursor-pointer shrink-0"
          >
            {/* Logout icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span className="hidden sm:inline">Log out</span>
          </button>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-8 md:py-12">

        {/* Title + Actions row — stacks on mobile */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-10">
          <div className="flex flex-col gap-0.5">
            <h2
              className="text-white text-xl md:text-2xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              All Bookings
            </h2>
            <p className="text-white/40 text-[13px]">
              {bookings.length} appointment{bookings.length !== 1 ? 's' : ''} total
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {/* Sync to Calendar */}
            <button
              onClick={handleCalendarSync}
              disabled={syncing || loading}
              className="flex items-center gap-2 text-emerald-400 text-[11px] tracking-[0.15em] uppercase
                         border border-emerald-500/40 hover:border-emerald-400/80
                         bg-emerald-500/[0.06] hover:bg-emerald-500/[0.12]
                         px-3 py-2 md:px-5 md:py-2.5 rounded-sm transition-all duration-200 cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={syncing ? 'animate-spin' : ''}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="hidden sm:inline">{syncing ? 'Syncing…' : 'Sync Calendar'}</span>
              <span className="sm:hidden">{syncing ? '…' : 'Sync'}</span>
            </button>

            {/* Refresh */}
            <button
              onClick={fetchBookings}
              disabled={loading || syncing}
              className="flex items-center gap-2 text-[#F5B800] text-[11px] tracking-[0.15em] uppercase
                         border border-[#F5B800]/40 hover:border-[#F5B800]/80
                         bg-[#F5B800]/[0.06] hover:bg-[#F5B800]/[0.12]
                         px-3 py-2 md:px-5 md:py-2.5 rounded-sm transition-all duration-200 cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={loading ? 'animate-spin' : ''}>
                <polyline points="23 4 23 10 17 10"/>
                <polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
              </svg>
              <span className="hidden sm:inline">{loading ? 'Refreshing…' : 'Refresh'}</span>
              <span className="sm:hidden">{loading ? '…' : ''}</span>
            </button>
          </div>
        </div>

        <div className="h-px bg-white/[0.06] mb-6 md:mb-8" />

        {/* ── Close Clinic Section ── */}
        <div className="mb-10 md:mb-14">
          <h3
            className="text-white text-lg font-bold mb-1"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Close Clinic
          </h3>
          <p className="text-white/40 text-[12px] mb-5">
            Block a time window so patients cannot book those slots.
          </p>

          <form onSubmit={handleCloseClinic} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-5">
            {/* Date */}
            <DatePicker
              id="closureDate"
              name="closureDate"
              value={closureDate}
              onChange={setClosureDate}
              placeholder="Select date"
              required
              inputClass="bg-white/[0.04] border border-white/10 text-white text-[13px] px-3 py-2.5
                         outline-none focus:border-[#F5B800]/60 transition-all duration-200"
            />
            {/* Start time */}
            <input
              type="time"
              step="1800"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
              className="bg-white/[0.04] border border-white/10 text-white text-[13px] px-3 py-2.5
                         outline-none focus:border-[#F5B800]/60 transition-all duration-200"
            />
            {/* End time */}
            <input
              type="time"
              step="1800"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
              className="bg-white/[0.04] border border-white/10 text-white text-[13px] px-3 py-2.5
                         outline-none focus:border-[#F5B800]/60 transition-all duration-200"
            />
            {/* Reason */}
            <input
              type="text"
              placeholder="Reason (optional)"
              value={closureReason}
              onChange={(e) => setClosureReason(e.target.value)}
              className="bg-white/[0.04] border border-white/10 text-white placeholder-white/25
                         text-[13px] px-3 py-2.5 outline-none focus:border-[#F5B800]/60
                         transition-all duration-200"
            />
            {/* Submit */}
            <button
              type="submit"
              disabled={closing}
              className="bg-red-500/80 hover:bg-red-500 text-white text-[11px] tracking-[0.18em]
                         font-bold uppercase px-4 py-2.5 transition-colors duration-200
                         disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {closing ? 'Saving…' : 'Close Clinic'}
            </button>
          </form>

          {closureError && (
            <p className="text-red-400 text-[12px] mb-4">{closureError}</p>
          )}

          {/* Existing closures list */}
          {closures.length > 0 && (
            <div className="flex flex-col gap-2">
              {closures.map((c) => (
                <div
                  key={c._id}
                  className="flex items-center justify-between gap-4 bg-white/[0.03]
                             border border-white/[0.07] px-4 py-3"
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="text-white/70 text-[13px]">{c.date}</span>
                    <span className="text-[#F5B800] text-[12px] font-medium">
                      {c.startTime} – {c.endTime}
                    </span>
                    {c.reason && (
                      <span className="text-white/40 text-[12px]">{c.reason}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteClosure(c._id)}
                    className="text-red-400 hover:text-red-300 text-[11px] tracking-wide
                               uppercase shrink-0 transition-colors cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="h-px bg-white/[0.06] mb-6 md:mb-8" />

        {loading ? (
          <div className="text-center py-20 text-white/30 text-[13px] tracking-widest uppercase animate-pulse">
            Loading bookings…
          </div>
        ) : (
          <BookingsTable bookings={bookings} />
        )}
      </div>
    </main>
  );
}
