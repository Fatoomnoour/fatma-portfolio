import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Wrench, Users } from 'lucide-react';

const technicalSkills = [
  { name: 'Python', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'Machine Learning', level: 75 },
  { name: 'Data Engineering (SSIS/ETL)', level: 70 },
  { name: 'React & Web Dev', level: 65 },
];

const tools = [
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'SSIS / ETL', icon: '🔄' },
  { name: 'SQL Server', icon: '🗃️' },
  { name: 'Scratch', icon: '🐱' },
  { name: 'C++', icon: '⚙️' },
  { name: 'React', icon: '⚛️' },
  { name: 'Git/GitHub', icon: '🔗' },
];

const leadershipSkills = [
  { title: 'Team Leadership', description: 'Led 20+ instructors across multiple academies' },
  { title: 'Training of Trainers (TOT)', description: 'Certified head mentor for instructor development' },
  { title: 'Curriculum Development', description: 'Created comprehensive coding curricula K-12' },
  { title: 'Operations Management', description: 'Managed content delivery and quality assurance' },
  { title: 'Entrepreneurship', description: 'Founded and scaled Kids Coding Hub' },
  { title: 'Community Building', description: 'Volunteering with GDG and Skills Area' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      {/* Background glows */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-semibold uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-7"
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="theme-text-secondary font-medium">{skill.name}</span>
                    <span className="text-primary-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 theme-bg-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-7"
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-teal-600 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl theme-bg-card border theme-border hover:border-primary-500/20 transition-all cursor-default group"
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">{tool.icon}</span>
                  <span className="text-sm theme-text-secondary font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-2xl p-7"
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              Leadership & Soft Skills
            </h3>
            <div className="space-y-3">
              {leadershipSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="p-3.5 rounded-xl theme-bg-card border theme-border hover:border-primary-500/20 transition-all"
                >
                  <h4 className="text-sm font-semibold">{skill.title}</h4>
                  <p className="text-xs theme-text-muted mt-1">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
