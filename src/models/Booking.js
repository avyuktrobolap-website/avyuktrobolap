import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: null,
    },
    date: {
      type: String, // stored as 'yyyy-MM-dd'
      required: true,
    },
    timeSlot: {
      type: String, // stored as 'HH:mm'
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    // Google Calendar integration
    calendarSynced: {
      type: Boolean,
      default: false,
    },
    calendarEventId: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Booking =
  mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

export default Booking;
