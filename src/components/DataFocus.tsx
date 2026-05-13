import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Workflow, BarChart3 } from 'lucide-react';

const pillars = [
  {
    icon: Database,
    title: 'ETL & Data Pipelines',
    points: [
      'Designing end-to-end ETL workflows with SSIS',
      'Building reliable data ingestion from multiple sources',
      'Structuring data warehouses for analytics and reporting',
    ],
  },
  {
    icon: Workflow,
    title: 'Data Architecture & Automation',
    points: [
      'Translating business needs into data models',
      'Automating recurring data processes and checks',
      'Ensuring data quality, consistency, and traceability',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    points: [
      'Exploratory data analysis using Python & SQL',
      'Designing dashboards and monitoring views',
      'Turning raw numbers into clear, actionable insights',
    ],
  },
];

export default function DataFocus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="data" className="py-20 relative section-bg-alt">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">
            Data Engineering Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Turning <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Data</span>{' '}
            into Decisions
          </h2>
          <p className="theme-text-secondary max-w-2xl mx-auto">
            Beyond education, I help teams design practical data workflows — from raw sources to
            clean, analytics-ready datasets that actually support decision making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-2xl p-7 flex flex-col gap-4 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
              </div>
              <ul className="mt-2 space-y-2">
                {pillar.points.map((point) => (
                  <li key={point} className="text-sm theme-text-secondary">
                    • {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
