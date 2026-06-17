import mongoose from 'mongoose';

const ClinicClosureSchema = new mongoose.Schema(
  {
    date: {
      type: String, // 'yyyy-MM-dd'
      required: true,
    },
    startTime: {
      type: String, // 'HH:mm'
      required: true,
    },
    endTime: {
      type: String, // 'HH:mm'
      required: true,
    },
    reason: {
      type: String,
      trim: true,
      default: '',
    },
  },
  { timestamps: true }
);

const ClinicClosure =
  mongoose.models.ClinicClosure ||
  mongoose.model('ClinicClosure', ClinicClosureSchema);

export default ClinicClosure;
