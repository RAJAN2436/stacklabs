import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, BarChart3, ArrowRight, Zap, Shield, TrendingUp, Users, Lightbulb, RefreshCw } from 'lucide-react';
import founderImage from '../components/media/MyPic.jpg';

const stats = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '30+', label: 'Happy Clients' },
  { num: '3',   label: 'Core Services' },
  { num: '99%', label: 'Satisfaction Rate' },
];

const services = [
  {
    icon: <Globe size={24} />,
    title: 'Web Services',
    desc: 'Fast, secure, beautiful websites and web apps optimized for performance and conversion.',
    color: 'yellow',
    tags: ['React / Next.js', 'Node.js', 'REST APIs', 'SEO'],
  },
  {
    icon: <Smartphone size={24} />,
    title: 'App Services',
    desc: 'Cross-platform mobile apps delivering smooth UX on every device.',
    color: 'yellow',
    tags: ['React Native', 'Flutter', 'iOS & Android', 'PWA'],
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Data Science',
    desc: 'ML models, dashboards, and analytics pipelines that power smarter decisions.',
    color: 'yellow',
    tags: ['Python', 'Machine Learning', 'Dashboards', 'NLP'],
  },
];

const whys = [
  { icon: <Zap size={18} />,        title: 'Fast Delivery',         desc: 'Agile sprints and clear timelines — we ship on time, every time.' },
  { icon: <Shield size={18} />,     title: 'Secure by Default',     desc: 'Every product follows best security practices from day one.' },
  { icon: <TrendingUp size={18} />, title: 'Scalable Architecture', desc: 'Solutions designed to grow with your user base and business.' },
  { icon: <Users size={18} />,      title: 'Client-First',          desc: 'Transparent communication and collaboration at every stage.' },
  { icon: <Lightbulb size={18} />,  title: 'Full-Stack Expertise',  desc: 'From UI design to databases — one team covers your entire stack.' },
  { icon: <RefreshCw size={18} />,  title: 'Post-Launch Support',   desc: "We don't disappear after delivery — we maintain and improve." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#FFD600 1px, transparent 1px), linear-gradient(90deg, #FFD600 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-yellow/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow
                          px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse-slow" />
            Open for Projects
          </div>

          <h1 className="font-display font-bold text-white leading-[1.04] tracking-tight mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            We Build<br />
            <span className="gradient-text">Digital Products</span><br />
            That Scale
          </h1>

          <p className="text-brand-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            StackLabs delivers end-to-end web services, mobile app development, and
            data science solutions — from idea to production.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-yellow text-base px-8 py-3.5">
              Start a Project
            </Link>
            <Link to="/services" className="btn-outline text-base px-8 py-3.5">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="border-y border-brand-border bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display font-bold text-4xl text-brand-yellow mb-1">{s.num}</div>
              <div className="text-brand-muted text-xs tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES PREVIEW ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="mb-14">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title mb-4">Services Tailored<br />to Your Business</h2>
          <p className="text-brand-muted max-w-lg leading-relaxed">
            Whether you're a startup or enterprise, StackLabs has the expertise to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(svc => (
            <div key={svc.title}
                 className="card group hover:-translate-y-1 relative overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20
                              flex items-center justify-center text-brand-yellow mb-5">
                {svc.icon}
              </div>

              <h3 className="font-display font-bold text-white text-lg mb-3">{svc.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-5">{svc.desc}</p>

              <div className="flex flex-wrap gap-2">
                {svc.tags.map(t => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="btn-outline inline-flex items-center gap-2">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-brand-dark border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="mb-14">
            <div className="section-tag">Why StackLabs</div>
            <h2 className="section-title">Built Different,<br />Delivered Better</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whys.map(w => (
              <div key={w.title} className="card flex gap-4">
                <div className="w-9 h-9 min-w-[36px] rounded-lg bg-brand-yellow/10 border border-brand-yellow/20
                                flex items-center justify-center text-brand-yellow">
                  {w.icon}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">{w.title}</div>
                  <div className="text-brand-muted text-xs leading-relaxed">{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="section-tag text-center">Leadership</div>
        <h2 className="section-title text-center mb-12">Meet the Founder</h2>

        <div className="max-w-2xl mx-auto card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-yellow to-yellow-700" />
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img 
              src={founderImage} 
              alt="Rajan Sharma, Founder & CEO"
              className="w-24 h-24 min-w-[96px] rounded-full object-cover border-2 border-brand-yellow/30"
            />
            <div>
              <h3 className="font-display font-bold text-white text-2xl mb-1">Mr. Rajan Sharma</h3>
              <p className="text-brand-yellow text-xs font-bold tracking-widest uppercase mb-4">Founder & CEO, StackLabs</p>
              <p className="text-brand-muted text-sm leading-relaxed">
                Rajan founded StackLabs with a vision to make world-class digital services accessible
                to businesses of all sizes. With deep expertise across web development, mobile apps,
                and data science, he leads a team committed to building products that are fast,
                scalable, and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl leading-tight">
              Ready to build something great?
            </h2>
            <p className="text-brand-black/70 mt-2">Tell us your idea — we'll make it real.</p>
          </div>
          <Link
            to="/contact"
            className="bg-brand-black text-brand-yellow font-display font-bold px-8 py-4 rounded-lg
                       hover:bg-brand-dark transition-colors duration-200 whitespace-nowrap inline-flex items-center gap-2"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
