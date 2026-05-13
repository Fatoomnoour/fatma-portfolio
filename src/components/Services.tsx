import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BookOpen,
  Users,
  Video,
  Building,
  MessageSquare,
  ArrowRight,
  Check,
  Sparkles,
  Database,
  Brain,
  BarChart3,
} from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Engineering & ETL',
    description:
      'Designing and building robust ETL/ELT data pipelines using SSIS, Python, and SQL. Transforming raw data into clean, structured, analytics-ready datasets.',
    features: ['ETL pipeline design with SSIS', 'Data warehousing & modeling', 'Automated data workflows'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Developing intelligent solutions using machine learning algorithms, from data preprocessing to model training, evaluation, and deployment.',
    features: ['ML model development', 'Data analysis & visualization', 'AI-powered automation'],
    color: 'from-primary-500 to-purple-600',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis & Insights',
    description:
      'Turning complex datasets into actionable business insights through statistical analysis, dashboards, and data storytelling.',
    features: ['Statistical analysis with Python', 'Interactive dashboards', 'Business intelligence reports'],
    color: 'from-accent-500 to-emerald-600',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Development',
    description:
      'Custom coding courses designed for kids & teens with comprehensive lesson plans, hands-on projects, and structured assessments.',
    features: ['Age-appropriate lesson plans', 'Project-based learning', 'Assessment rubrics & tracking'],
    color: 'from-purple-500 to-primary-600',
  },
  {
    icon: Users,
    title: 'Instructor Training (TOT)',
    description:
      'Comprehensive Training of Trainers programs to develop confident, effective coding educators from onboarding to mastery.',
    features: ['Structured training materials', 'Certification preparation', 'Ongoing mentorship & support'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Video,
    title: 'Content Creation',
    description:
      'Engaging educational videos, presentations, and interactive materials that make complex concepts accessible and fun.',
    features: ['Video scripts & production', 'Slide decks & visuals', 'Interactive exercises'],
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Building,
    title: 'Academy Setup & Consulting',
    description:
      'End-to-end guidance for launching a kids coding program — from curriculum framework to operational playbook.',
    features: ['Full curriculum package', 'Operations & process guide', 'Staff training & onboarding'],
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: MessageSquare,
    title: 'Strategy Consultation',
    description:
      'Expert advice on tech education strategy and data solutions — roadmap planning, best practices, and growth recommendations.',
    features: ['Strategic roadmap', 'Industry best practices', 'Growth recommendations'],
    color: 'from-rose-500 to-red-600',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-accent-400 text-sm font-semibold uppercase tracking-widest">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="theme-text-secondary max-w-2xl mx-auto text-lg">
            From data engineering and AI solutions to building complete tech education ecosystems —
            I bring technical expertise combined with educational leadership.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="glass rounded-2xl p-7 group hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="theme-text-secondary text-sm leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm theme-text-secondary">
                    <Check className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 group-hover:text-accent-400 transition-colors mt-auto"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="glass rounded-2xl p-7 flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary-600/10 to-accent-500/10 border-primary-500/20 hover:border-primary-500/40 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-5 animate-pulse-glow">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Let's Collaborate!</h3>
            <p className="theme-text-secondary text-sm mb-6">
              Have a unique project in mind? Whether it's data, AI, or education — let's bring your vision to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white! font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
