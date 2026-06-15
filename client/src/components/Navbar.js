import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-brand-black/90 backdrop-blur-xl border-b border-brand-border' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="font-display font-bold text-xl tracking-tight">
          Stack<span className="text-brand-yellow">Labs</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`nav-link ${pathname === l.to ? 'text-brand-yellow' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="hidden md:inline-block btn-yellow">
          Hire Us
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-brand-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium py-1 ${pathname === l.to ? 'text-brand-yellow' : 'text-brand-light'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-yellow text-center mt-2">
            Hire Us
          </Link>
        </div>
      )}
    </nav>
  );
}
