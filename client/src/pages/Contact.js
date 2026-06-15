import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Mail, MapPin, Clock } from 'lucide-react';

const services = ['Web Services', 'App Services', 'Data Science', 'Custom Software', 'UI/UX Design', 'Multiple Services'];
const budgets  = ['Under ₹50,000', '₹50K – ₹2L', '₹2L – ₹5L', '₹5L – ₹10L', '₹10L+', 'Not sure yet'];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', service: '', budget: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await axios.post('/api/contact', form);
      toast.success('Message sent! We\'ll reply within 24 hours.');
      setForm({ name: '', email: '', service: '', budget: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: 'linear-gradient(#FFD600 1px,transparent 1px),linear-gradient(90deg,#FFD600 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10">
          <div className="section-tag">Get in Touch</div>
          <h1 className="section-title mb-4">Let's Build Something Great</h1>
          <p className="text-brand-muted max-w-xl mx-auto leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Info sidebar */}
          <div className="flex flex-col gap-5">
            {[
              { icon: <Mail size={18} />,    title: 'Email Us',       val: 'hello@stacklabs.dev' },
              { icon: <MapPin size={18} />,  title: 'Based In',        val: 'India (Remote-friendly)' },
              { icon: <Clock size={18} />,   title: 'Response Time',   val: 'Within 24 hours' },
            ].map(info => (
              <div key={info.title} className="card flex gap-4 items-start">
                <div className="w-10 h-10 min-w-[40px] rounded-lg bg-brand-yellow/10 border border-brand-yellow/20
                                flex items-center justify-center text-brand-yellow">
                  {info.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold mb-0.5">{info.title}</div>
                  <div className="text-brand-muted text-xs">{info.val}</div>
                </div>
              </div>
            ))}

            {/* Founder card */}
            <div className="card border-t-2 border-t-brand-yellow mt-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/10 border border-brand-yellow/30
                                flex items-center justify-center font-display font-bold text-brand-yellow text-sm">
                  RS
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Mr. Rajan Sharma</div>
                  <div className="text-brand-yellow text-xs">Founder & CEO</div>
                </div>
              </div>
              <p className="text-brand-muted text-xs leading-relaxed">
                "Every project we take on gets our full attention. Reach out and let's see how StackLabs can help you."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={submit} className="card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-yellow to-yellow-700" />

              <h2 className="font-display font-bold text-white text-xl mb-6">Send us a message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold text-brand-muted tracking-widest uppercase mb-2">
                    Full Name <span className="text-brand-yellow">*</span>
                  </label>
                  <input
                    name="name" value={form.name} onChange={handle}
                    placeholder="Ravi Kumar"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-muted tracking-widest uppercase mb-2">
                    Email Address <span className="text-brand-yellow">*</span>
                  </label>
                  <input
                    type="email" name="email" value={form.email} onChange={handle}
                    placeholder="you@company.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold text-brand-muted tracking-widest uppercase mb-2">
                    Service Needed <span className="text-brand-yellow">*</span>
                  </label>
                  <select name="service" value={form.service} onChange={handle} className="input-field">
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-muted tracking-widest uppercase mb-2">
                    Budget Range
                  </label>
                  <select name="budget" value={form.budget} onChange={handle} className="input-field">
                    <option value="">Select budget...</option>
                    {budgets.map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-brand-muted tracking-widest uppercase mb-2">
                  Project Details <span className="text-brand-yellow">*</span>
                </label>
                <textarea
                  name="message" value={form.message} onChange={handle} rows={5}
                  placeholder="Describe your project, goals, timeline, or anything else relevant..."
                  className="input-field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-yellow py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
