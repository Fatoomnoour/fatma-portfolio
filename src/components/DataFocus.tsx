import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, Database, GitBranch, Terminal } from 'lucide-react';

const stack = [
  { icon: GitBranch, title: 'Data Engineering', tools: ['Kafka', 'PySpark Structured Streaming', 'Airflow', 'dbt'] },
  { icon: Database, title: 'Data Platforms', tools: ['BigQuery', 'PostgreSQL', 'Docker', 'Parquet'] },
  { icon: Terminal, title: 'Programming', tools: ['Python', 'SQL', 'Pandas', 'Pytest'] },
  { icon: BarChart3, title: 'AI & Output', tools: ['MLflow', 'XGBoost', 'Streamlit', 'Analytics'] },
];

export default function DataFocus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="data" className="relative py-28 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12"
        >
          <div>
            <span className="eyebrow">Engineering stack</span>
            <h2 className="section-title mt-3">Tools with a job to do.</h2>
          </div>
          <p className="theme-text-secondary max-w-xl leading-relaxed">
            A focused stack for moving data from source events to reliable transformations, analytical outputs, and explainable decisions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-700/30 border border-slate-700/30">
          {stack.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="bg-[#111827] p-6 min-h-48"
              >
                <Icon className="w-5 h-5 text-cyan-300" />
                <h3 className="font-semibold mt-6">{group.title}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {group.tools.map((tool) => <span key={tool} className="tech-chip">{tool}</span>)}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
