import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, Code, Database, Terminal, Users, Wrench } from 'lucide-react';

const skillGroups = [
  { icon: Database, name: 'Data Engineering', desc: 'Python, SQL, PostgreSQL, Kafka, PySpark, BigQuery, dbt, Airflow, ETL, Data Modeling, APIs, Docker' },
  { icon: BarChart3, name: 'AI & Machine Learning', desc: 'Pandas, NumPy, Scikit-learn, Machine Learning, NLP, Deep Learning, EDA, Feature Engineering' },
  { icon: Terminal, name: 'Backend & Software Engineering', desc: 'Backend Development, Flask, REST APIs, Git, GitHub, Linux, Testing' },
  { icon: Code, name: 'Analytics & Delivery', desc: 'Streamlit, data storytelling, documentation, curriculum design, quality assurance' },
];

const tools = ['Python', 'SQL', 'PostgreSQL', 'Kafka', 'Spark', 'PySpark', 'Airflow', 'BigQuery', 'dbt', 'Docker', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask', 'Git', 'GitHub'];

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
    <section id="skills" className="py-24 lg:py-28 relative" aria-labelledby="skills-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div><span className="eyebrow">Technical toolkit</span><h2 id="skills-title" className="section-title mt-3">Skills that support the full data lifecycle.</h2></div>
          <p className="theme-text-secondary max-w-xl leading-relaxed">A focused stack for moving data from source events to reliable transformations, analytical outputs, and explainable decisions.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {skillGroups.map((skill, index) => {
            const Icon = skill.icon;
            return <motion.article key={skill.name} initial={{ opacity: 0, y: 14 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.35, delay: index * 0.06 }} className="theme-bg-card border theme-border rounded-2xl p-6 card-hover"><Icon className="w-5 h-5 text-primary-700 dark:text-primary-300" aria-hidden="true" /><h3 className="font-semibold mt-5">{skill.name}</h3><p className="theme-text-secondary text-sm leading-relaxed mt-3">{skill.desc}</p></motion.article>;
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mt-4">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.35, delay: 0.2 }} className="theme-bg-card border theme-border rounded-2xl p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-3"><span className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center"><Wrench className="w-4 h-4 text-white" aria-hidden="true" /></span>Tools & technologies</h3>
            <div className="flex flex-wrap gap-2">{tools.map((tool) => <span key={tool} className="tech-chip">{tool}</span>)}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.35, delay: 0.26 }} className="theme-bg-card border theme-border rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-5 flex items-center gap-3"><span className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center"><Users className="w-4 h-4 text-white" aria-hidden="true" /></span>Soft skills</h3>
            <div className="space-y-4">{leadershipSkills.map((skill) => <div key={skill.title}><h4 className="text-sm font-semibold">{skill.title}</h4><p className="text-xs theme-text-secondary mt-1">{skill.description}</p></div>)}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
