const express  = require('express');
const router   = express.Router();
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Contact  = require('../models/Contact');

// ── Rate limiter: max 5 contact submissions per hour per IP ──
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { success: false, message: 'Too many submissions. Please try again later.' },
});

// ── Validation rules ──────────────────────────────────────────
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('service').notEmpty().withMessage('Service is required'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 2000 }),
];

// ── Email helper ──────────────────────────────────────────────
async function sendNotificationEmail(contact) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('⚠️  Email credentials not configured. Email notifications disabled.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.EMAIL_HOST || 'smtp.gmail.com',
    port:   parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from:    `"StackLabs" <${process.env.EMAIL_USER}>`,
      to:      process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
      subject: `🚀 New Client Inquiry: ${contact.name} — ${contact.service}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#FFD600;padding:20px 30px">
            <h1 style="margin:0;color:#0A0A0A;font-size:22px">New Client Inquiry</h1>
          </div>
          <div style="background:#f9f9f9;padding:30px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:120px"><strong>Name</strong></td><td>${contact.name}</td></tr>
              <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td><a href="mailto:${contact.email}">${contact.email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666"><strong>Service</strong></td><td>${contact.service}</td></tr>
              <tr><td style="padding:8px 0;color:#666"><strong>Budget</strong></td><td>${contact.budget || 'Not specified'}</td></tr>
            </table>
            <div style="margin-top:20px">
              <strong style="color:#666">Message:</strong>
              <p style="background:#fff;border-left:4px solid #ff0000;padding:15px;margin-top:8px">${contact.message}</p>
            </div>
          </div>
          <div style="background:#0A0A0A;padding:15px 30px;text-align:center">
            <p style="color:#fff;font-size:12px;margin:0">StackLabs — stacklabs.dev</p>
          </div>
        </div>
      `,
    });
    console.log(`✅ Email sent to ${process.env.NOTIFY_EMAIL || process.env.EMAIL_USER}`);
  } catch (err) {
    console.error('❌ Email send failed:', err.message);
  }
}

// ── POST /api/contact ─────────────────────────────────────────
router.post('/', contactLimiter, validateContact, async (req, res) => {
  // Validate
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, service, budget, message } = req.body;

    // Save to MongoDB
    const contact = await Contact.create({
      name, email, service, budget, message,
      ipAddress: req.ip,
    });

    console.log(`✅ Contact submitted: ${contact._id} from ${email}`);

    // Send email notification (non-blocking)
    sendNotificationEmail(contact).catch(err =>
      console.error('Email notification failed:', err.message)
    );

    res.status(201).json({
      success: true,
      message: "Message received! We'll get back to you within 24 hours.",
      id: contact._id,
    });
  } catch (err) {
    console.error('❌ Contact submission error:', err.message);
    
    // Provide more specific error messages
    let errorMsg = 'Server error. Please try again.';
    if (err.message.includes('E11000')) {
      errorMsg = 'This email has already been submitted. Please use a different email or try again later.';
    } else if (err.message.includes('validation failed')) {
      errorMsg = 'Please check your input and try again.';
    }
    
    res.status(500).json({ success: false, message: errorMsg });
  }
});

// ── GET /api/contact — list all submissions (admin use) ───────
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-ipAddress');
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ── PATCH /api/contact/:id — update status ────────────────────
router.patch('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );
    if (!contact) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: contact });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
