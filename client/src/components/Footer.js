import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display font-bold text-2xl mb-3">
              Stack<span className="text-brand-yellow">Labs</span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              End-to-end web, app, and data science services. We build digital
              products that are fast, scalable, and impactful.
            </p>
            <div className="flex gap-4 mt-5">
              {[
                { icon: <Github size={18} />,   href: 'https://github.com/RAJAN2436' },
                { icon: <Instagram size={18} />,  href: 'https://www.instagram.com/rajanstacklabs/' },
                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/rajan-sharma-ai/' },
                { icon: <Mail size={18} />,     href: 'mailto:rajanstacklabs@gmail.com' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href}
                  target="_blank"
                  className="w-9 h-9 rounded-lg border border-brand-border flex items-center justify-center
                             text-brand-muted hover:text-brand-yellow hover:border-brand-yellow/50 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Services', 'App Services', 'Data Science', 'UI/UX Design', 'API Development'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-brand-muted text-sm hover:text-brand-yellow transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us',  to: '/about' },
                { label: 'Services',  to: '/services' },
                { label: 'Contact',   to: '/contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-brand-muted text-sm hover:text-brand-yellow transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-brand-muted text-xs">
            © {new Date().getFullYear()} StackLabs. All rights reserved.
          </p>
          <p className="text-brand-muted text-xs">
            Founded by <span className="text-brand-yellow font-medium">Mr. Rajan Sharma</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
