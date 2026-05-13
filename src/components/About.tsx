import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Users, Rocket, BookOpen, Settings, Lightbulb, Database } from 'lucide-react';

const highlights = [
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'ETL pipelines with SSIS, data warehousing & analytics solutions',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Cpu,
    title: 'Technical Foundation',
    description: 'ICPC Problem Solving background + AI/Data Engineering training',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: Users,
    title: 'Educational Leadership',
    description: 'TOT certified, managed 20+ instructors across multiple academies',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurial Success',
    description: 'Founded and scaled Kids Coding Hub from scratch',
    color: 'from-primary-500 to-accent-500',
  },
  {
    icon: BookOpen,
    title: 'Content Development',
    description: 'Created comprehensive coding curricula for ages 6-16',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Settings,
    title: 'Operations Management',
    description: 'Team leadership, quality assurance, and process optimization',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
            Passionate About{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Tech & Education
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              <p className="theme-text-secondary text-lg leading-relaxed">
                A passionate Computer Science graduate with a unique journey that spans from
                competitive programming (ICPC) to founding my own coding academy for kids. With{' '}
                <strong className="text-primary-400">4+ years</strong> of progressive experience in tech education,
                I bring a rare combination of technical expertise, leadership skills, and
                entrepreneurial mindset.
              </p>

              <div className="border-l-4 border-primary-500 pl-6 py-2">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-primary-400" />
                  What Makes Me Different
                </h3>
                <p className="theme-text-secondary leading-relaxed">
                  I don't just teach coding — I build complete educational ecosystems. From
                  curriculum design to team management to business development, I bring end-to-end
                  expertise in tech education for young learners.
                </p>
              </div>

              {/* Quick counters */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '4+', label: 'Years Experience' },
                  { value: '20+', label: 'Instructors Led' },
                  { value: '6-16', label: 'Age Range Taught' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl theme-bg-card">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs theme-text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-5 hover:border-primary-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm theme-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
