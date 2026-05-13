import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Brain, Rocket, Users, BookOpen, Heart, Trophy } from 'lucide-react';

const timeline = [
  {
    year: '2026',
    badge: '2026 – Present',
    title: 'AI & Data Engineer Trainee',
    org: 'Digilians',
    desc: 'Advanced AI/ML skills development, data pipeline engineering & model deployment',
    icon: Brain,
    color: 'from-accent-500 to-teal-600',
    current: true,
  },
  {
    year: '2025',
    badge: '2025',
    title: 'CS Graduate',
    org: 'Minya University',
    desc: 'Bachelor of Computer Science',
    icon: GraduationCap,
    color: 'from-primary-500 to-primary-700',
    current: false,
  },
  {
    year: '2025',
    badge: '2025',
    title: 'Founder & CEO',
    org: 'Kids Coding Hub',
    desc: 'Established own coding academy for kids, built team and curriculum from scratch',
    icon: Rocket,
    color: 'from-amber-500 to-orange-600',
    current: false,
  },
  {
    year: '2023–24',
    badge: '2023–2024',
    title: 'Content Lead & Team Manager',
    org: 'Schoola Academy',
    desc: 'Led content strategy, mentoring, and quality assurance across programs',
    icon: BookOpen,
    color: 'from-pink-500 to-rose-600',
    current: false,
  },
  {
    year: '2023',
    badge: '2023',
    title: 'Programming Instructor',
    org: 'Codk Academy',
    desc: 'Taught coding to kids, developed initial teaching methodology and course materials',
    icon: BookOpen,
    color: 'from-purple-500 to-indigo-600',
    current: false,
  },
  {
    year: '2022–23',
    badge: '2022–2023',
    title: 'Head Mentor (TOT) & Team Leader',
    org: 'Engineer Academy',
    desc: 'Managed 20+ instructors, developed training programs and certification paths',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
    current: false,
  },
  {
    year: '2021',
    badge: '2021',
    title: 'Volunteer',
    org: 'Skills Area & GDG HR',
    desc: 'Taught programming & soft skills, community engagement and team coordination',
    icon: Heart,
    color: 'from-red-500 to-pink-600',
    current: false,
  },
  {
    year: 'University',
    badge: 'University',
    title: 'ICPC Contestant',
    org: 'Minya University',
    desc: 'Competitive problem solving training, algorithm design and data structures',
    icon: Trophy,
    color: 'from-yellow-500 to-amber-600',
    current: false,
  },
];

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="journey" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">
            My Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            From competitive programming to founding my own academy — every step built
            toward a mission in tech education and data engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500/0" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-left ml-16 md:ml-0`}>
                    <div className={`glass rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 group hover:-translate-y-1 ${item.current ? 'border-accent-500/30 shadow-lg shadow-accent-500/5' : ''}`}>
                      <div className={`inline-flex items-center gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-xs font-bold text-primary-400 bg-primary-500/10 px-3 py-1 rounded-lg">
                          {item.badge}
                        </span>
                        {item.current && (
                          <span className="text-xs font-semibold text-accent-400 bg-accent-500/10 px-2 py-0.5 rounded-md animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold mt-3 group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>
                      <h4 className="text-sm text-accent-400 font-medium mt-1">{item.org}</h4>
                      <p className="text-sm theme-text-secondary mt-2">{item.desc}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transition-transform ${item.current ? 'animate-pulse-glow' : ''}`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
