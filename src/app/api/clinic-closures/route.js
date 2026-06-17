export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ClinicClosure from '@/models/ClinicClosure';

/* ─── helpers ─────────────────────────────────────────────────────────────── */
function toMinutes(t) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}

/* ─── GET /api/clinic-closures?date=yyyy-MM-dd ────────────────────────────── */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    await connectDB();

    if (!date) {
      // Return all closures (admin view)
      const closures = await ClinicClosure.find().sort({ date: 1, startTime: 1 }).lean();
      return NextResponse.json(closures, { status: 200 });
    }

    const closures = await ClinicClosure.find({ date }).sort({ startTime: 1 }).lean();
    return NextResponse.json(closures, { status: 200 });
  } catch (error) {
    console.error('GET /api/clinic-closures error:', error);
    return NextResponse.json([], { status: 200 }); // fail open — no closures
  }
}

/* ─── POST /api/clinic-closures ───────────────────────────────────────────── */
export async function POST(request) {
  try {
    const body = await request.json();
    const { date, startTime, endTime, reason } = body;

    if (!date || !startTime || !endTime) {
      return NextResponse.json(
        { error: 'date, startTime and endTime are required' },
        { status: 400 }
      );
    }

    if (toMinutes(startTime) >= toMinutes(endTime)) {
      return NextResponse.json(
        { error: 'Start time must be before end time' },
        { status: 400 }
      );
    }

    await connectDB();

    const closure = await ClinicClosure.create({ date, startTime, endTime, reason: reason || '' });

    return NextResponse.json(closure, { status: 201 });
  } catch (error) {
    console.error('POST /api/clinic-closures error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/* ─── DELETE /api/clinic-closures?id=<id> ────────────────────────────────── */
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }

    await connectDB();
    await ClinicClosure.findByIdAndDelete(id);

    return NextResponse.json({ message: 'Closure deleted' }, { status: 200 });
  } catch (error) {
    console.error('DELETE /api/clinic-closures error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
