import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  { num: '01', title: 'Discovery & Scoping',    desc: 'We understand your goals, constraints, and audience. You get a clear proposal with timeline and cost.' },
  { num: '02', title: 'Design & Planning',       desc: 'Wireframes, architecture decisions, and a sprint plan — so there are no surprises during development.' },
  { num: '03', title: 'Development & Testing',   desc: 'Clean, documented code with continuous testing and regular check-ins to keep you in the loop.' },
  { num: '04', title: 'Launch & Handover',        desc: 'Smooth deployment, full documentation, and onboarding — then ongoing support as needed.' },
];

const values = [
  { title: 'Transparency',  desc: 'No hidden fees, no vague timelines. You always know exactly where things stand.' },
  { title: 'Quality First', desc: 'We take pride in every line of code and every pixel — mediocre is not in our vocabulary.' },
  { title: 'Long-term Partnership', desc: "We invest in your success beyond launch. Your growth is our growth." },
  { title: 'Innovation',    desc: 'We stay ahead of the curve so you benefit from modern tools and best practices.' },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: 'linear-gradient(#FFD600 1px,transparent 1px),linear-gradient(90deg,#FFD600 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10">
          <div className="section-tag">Who We Are</div>
          <h1 className="section-title mb-4">About StackLabs</h1>
          <p className="text-brand-muted max-w-xl mx-auto leading-relaxed">
            A tech services company built on craftsmanship, transparency, and a genuine passion for building things that matter.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-tag">Our Story</div>
            <h2 className="section-title mb-5">Built to Solve<br />Real Problems</h2>
            <p className="text-brand-muted leading-relaxed mb-4">
              StackLabs was founded with a straightforward mission: make high-quality digital services accessible to every business,
              not just the ones with massive budgets. Too many great ideas fail because the right technical partner wasn't there.
            </p>
            <p className="text-brand-muted leading-relaxed mb-4">
              We started as a small team of engineers and designers who were tired of seeing half-baked software shipped to clients
              who deserved better. So we built the kind of studio we wished existed — one that combines senior talent, honest
              communication, and a genuine love for the craft.
            </p>
            <p className="text-brand-muted leading-relaxed">
              Today, StackLabs serves clients across industries, delivering web platforms, mobile apps, and data science solutions
              that make a real difference to their bottom line.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '2021',  label: 'Founded' },
              { num: '50+',   label: 'Projects' },
              { num: '30+',   label: 'Clients' },
              { num: '99%',   label: 'Satisfaction' },
            ].map(s => (
              <div key={s.label} className="card text-center">
                <div className="font-display font-bold text-brand-yellow text-4xl mb-2">{s.num}</div>
                <div className="text-brand-muted text-xs tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-brand-dark border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="section-tag text-center">Leadership</div>
          <h2 className="section-title text-center mb-12">Meet the Founder</h2>

          <div className="max-w-2xl mx-auto card relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-yellow to-yellow-700" />
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Avatar */}
              <div className="w-24 h-24 min-w-[96px] rounded-full bg-brand-yellow/10 border-2 border-brand-yellow/40
                              flex items-center justify-center font-display font-bold text-brand-yellow text-3xl">
                RS
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-2xl mb-1">Mr. Rajan Sharma</h3>
                <p className="text-brand-yellow text-xs font-bold tracking-widest uppercase mb-4">Founder & CEO</p>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  Rajan founded StackLabs with a vision to make world-class digital services accessible to businesses of all sizes.
                  With deep expertise spanning web development, mobile engineering, and data science, he leads a team committed to
                  building products that are fast, scalable, and impactful.
                </p>
                <p className="text-brand-muted text-sm leading-relaxed">
                  His philosophy is simple: great software is not just about code — it's about understanding people's problems deeply
                  and solving them with elegance and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="section-tag">How We Work</div>
        <h2 className="section-title mb-12">Our Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {steps.map((s, i) => (
            <div key={s.num} className="card flex gap-5">
              <div className="w-11 h-11 min-w-[44px] rounded-xl bg-brand-yellow/10 border border-brand-yellow/30
                              flex items-center justify-center font-display font-bold text-brand-yellow text-sm">
                {s.num}
              </div>
              <div>
                <div className="font-semibold text-white text-sm mb-1">{s.title}</div>
                <div className="text-brand-muted text-xs leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-dark border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="section-tag">What Drives Us</div>
          <h2 className="section-title mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.title} className="card border-t-2 border-t-brand-yellow">
                <h3 className="font-display font-bold text-white text-base mb-2">{v.title}</h3>
                <p className="text-brand-muted text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-bold text-brand-black text-2xl md:text-3xl">
            Want to work with us?
          </h2>
          <Link to="/contact"
                className="bg-brand-black text-brand-yellow font-display font-bold px-7 py-3.5 rounded-lg
                           hover:bg-brand-dark transition-colors duration-200 inline-flex items-center gap-2">
            Let's Talk <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
