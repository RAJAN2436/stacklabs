import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, BarChart3, Code2, Database, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Web Services',
    subtitle: 'Scalable web experiences built for performance',
    desc: 'From marketing sites to full-scale SaaS platforms — we architect and build fast, secure, beautiful web products. Our frontend engineers craft pixel-perfect UIs while our backend team ensures rock-solid APIs and infrastructure.',
    features: [
      'Custom website & web app development',
      'E-commerce & marketplace platforms',
      'REST & GraphQL API development',
      'SEO optimization & performance audits',
      'Cloud hosting & DevOps setup',
      'CMS integration (Headless, WordPress)',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Tailwind CSS'],
  },
  {
    icon: <Smartphone size={28} />,
    title: 'App Services',
    subtitle: 'Mobile-first products for iOS & Android',
    desc: 'Cross-platform mobile and desktop applications built with modern frameworks. We deliver smooth, intuitive user experiences with native-level performance — available on every device your customers use.',
    features: [
      'Cross-platform mobile apps (iOS & Android)',
      'React Native & Flutter development',
      'Progressive Web Apps (PWA)',
      'App Store & Play Store deployment',
      'Push notifications & offline support',
      'UI/UX design & prototyping',
    ],
    stack: ['React Native', 'Flutter', 'Expo', 'Firebase', 'Redux', 'TypeScript', 'Figma'],
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Data Science',
    subtitle: 'Insights and intelligence from your data',
    desc: 'Turn raw data into strategic advantage. We build machine learning models, interactive dashboards, and automated data pipelines that help you make faster, smarter business decisions backed by evidence.',
    features: [
      'Machine learning model development',
      'Data pipeline design & automation',
      'Interactive analytics dashboards',
      'Natural language processing (NLP)',
      'Predictive analytics & forecasting',
      'Data cleaning & ETL processes',
    ],
    stack: ['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'SQL', 'Power BI', 'Tableau', 'Apache Spark'],
  },
  {
    icon: <Code2 size={28} />,
    title: 'Custom Software',
    subtitle: 'Bespoke solutions for unique challenges',
    desc: "Sometimes off-the-shelf doesn't cut it. We design and build custom software tailored precisely to your workflows, integrations, and scale — from internal tools to full enterprise systems.",
    features: [
      'Enterprise software development',
      'Internal tools & admin dashboards',
      'Legacy system modernization',
      'Third-party API integrations',
      'Microservices architecture',
      'Software audits & code reviews',
    ],
    stack: ['Node.js', 'Python', 'React', 'Docker', 'Kubernetes', 'Redis', 'RabbitMQ'],
  },
  {
    icon: <Database size={28} />,
    title: 'Database & Backend',
    subtitle: 'Robust backends that power your product',
    desc: 'We design scalable database schemas and build reliable backends that handle growth gracefully. From SQL to NoSQL, from monoliths to microservices — we pick the right architecture for your needs.',
    features: [
      'Database design & optimization',
      'MongoDB, PostgreSQL, MySQL',
      'Authentication & authorization',
      'Real-time features (WebSockets)',
      'Caching strategies (Redis)',
      'Cloud database management',
    ],
    stack: ['MongoDB', 'PostgreSQL', 'Redis', 'Node.js', 'Express', 'Prisma', 'JWT'],
  },
  {
    icon: <Layers size={28} />,
    title: 'UI/UX Design',
    subtitle: 'Interfaces people love to use',
    desc: 'Great products start with great design. We create intuitive, accessible, and visually striking user interfaces — from initial wireframes to polished, developer-ready design systems.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design & branding',
      'Design systems & component libraries',
      'Usability testing',
      'Figma design handoff',
    ],
    stack: ['Figma', 'Adobe XD', 'Framer', 'Storybook', 'Tailwind CSS'],
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
             style={{ backgroundImage: 'linear-gradient(#FFD600 1px,transparent 1px),linear-gradient(90deg,#FFD600 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10">
          <div className="section-tag">What We Offer</div>
          <h1 className="section-title mb-4">Our Services</h1>
          <p className="text-brand-muted max-w-xl mx-auto leading-relaxed">
            End-to-end digital services delivered by a passionate team. Pick one or combine several for a complete solution.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div className="flex flex-col gap-12">
          {services.map((svc, i) => (
            <div key={svc.title}
                 className="card group grid grid-cols-1 lg:grid-cols-2 gap-8 hover:border-brand-yellow/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Left */}
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20
                                flex items-center justify-center text-brand-yellow mb-5">
                  {svc.icon}
                </div>
                <h2 className="font-display font-bold text-white text-2xl mb-1">{svc.title}</h2>
                <p className="text-brand-yellow text-xs font-bold tracking-widest uppercase mb-4">{svc.subtitle}</p>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">{svc.desc}</p>
                <Link to="/contact"
                      className="inline-flex items-center gap-2 text-brand-yellow text-sm font-semibold
                                 hover:gap-3 transition-all duration-200">
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-5">
                {/* Features */}
                <div>
                  <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-3">What's included</h4>
                  <ul className="space-y-2">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-brand-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Stack */}
                <div>
                  <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {svc.stack.map(t => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-bold text-brand-black text-2xl md:text-3xl">
            Not sure which service you need?
          </h2>
          <Link to="/contact"
                className="bg-brand-black text-brand-yellow font-display font-bold px-7 py-3.5 rounded-lg
                           hover:bg-brand-dark transition-colors duration-200 whitespace-nowrap inline-flex items-center gap-2">
            Talk to Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
