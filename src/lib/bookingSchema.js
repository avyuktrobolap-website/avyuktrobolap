import * as yup from 'yup';

export const bookingSchema = yup.object({
  patientName: yup
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .required('Patient name is required'),

  mobile: yup
    .string()
    .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number')
    .required('Mobile number is required'),

  email: yup
    .string()
    .email('Enter a valid email address')
    .optional()
    .nullable()
    .transform((v) => (v === '' ? null : v)),

  date: yup
    .string()
    .required('Please select a date'),

  timeSlot: yup
    .string()
    .required('Please select a time slot'),

  description: yup
    .string()
    .trim()
    .min(10, 'Please describe your concern in at least 10 characters')
    .required('Description is required'),
});
