const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type:     String,
      required: [true, 'Name is required'],
      trim:     true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type:     String,
      required: [true, 'Email is required'],
      trim:     true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    service: {
      type:     String,
      required: [true, 'Service is required'],
      enum: [
        'Web Services',
        'App Services',
        'Data Science',
        'Custom Software',
        'UI/UX Design',
        'Multiple Services',
      ],
    },
    budget: {
      type: String,
      default: '',
    },
    message: {
      type:     String,
      required: [true, 'Message is required'],
      trim:     true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    status: {
      type:    String,
      enum:    ['new', 'read', 'replied', 'archived'],
      default: 'new',
    },
    ipAddress: String,
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

module.exports = mongoose.model('Contact', contactSchema);
