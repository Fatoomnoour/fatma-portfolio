import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Database, GitBranch, Radio, Settings2 } from 'lucide-react';

const pipeline = [
  { label: 'Events', tool: 'Python + Pydantic', icon: Settings2 },
  { label: 'Ingestion', tool: 'Kafka', icon: Radio },
  { label: 'Processing', tool: 'PySpark Streaming', icon: GitBranch },
  { label: 'Warehouse', tool: 'BigQuery', icon: Database },
];

const decisions = [
  ['Kafka', 'Decoupled event ingestion from downstream processing.'],
  ['PySpark', 'Provided a structured streaming layer for transforming incoming events.'],
  ['Airflow + dbt', 'Separated workflow orchestration from modular SQL transformations.'],
  ['BigQuery', 'Served as the analytics warehouse layer for queryable outputs.'],
];

export default function FeaturedProject() {
  return (
    <section id="featured" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"
        >
          <div>
            <span className="eyebrow">Featured project</span>
            <h2 className="section-title mt-3">PharmStock</h2>
            <p className="theme-text-secondary max-w-2xl mt-4 text-lg">
              End-to-end pharmacy data engineering and forecasting platform.
            </p>
          </div>
          <a
            href="https://github.com/Fatoomnoour/pharmstock-ai-data-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200 transition-colors"
          >
            Explore the repository <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="technical-panel p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary-300">Architecture view</p>
                <p className="text-sm theme-text-muted font-mono mt-2">pharmstock_pipeline</p>
              </div>
              <span className="status-dot"><span /> evidence-led</span>
            </div>
            <div className="space-y-3">
              {pipeline.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.label} className="pipeline-row">
                    <div className="pipeline-index">0{index + 1}</div>
                    <div className="pipeline-icon"><Icon className="w-4 h-4 text-primary-300" /></div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest theme-text-muted">{stage.label}</p>
                      <p className="font-semibold mt-1 truncate">{stage.tool}</p>
                    </div>
                    {index < pipeline.length - 1 && <div className="pipeline-connector" aria-hidden="true" />}
                  </div>
                );
              })}
            </div>
            <div className="mt-8 pt-6 border-t theme-divider">
              <p className="text-sm theme-text-secondary leading-relaxed">
                A portfolio walkthrough of implemented components—not a claim of production deployment or live monitoring.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-6"
          >
            <div className="glass p-6 md:p-8">
              <p className="eyebrow">The problem</p>
              <p className="text-lg leading-relaxed mt-4 theme-text-secondary">
                Pharmacy inventory events need a repeatable path from ingestion to analytics. PharmStock demonstrates how the data flow can be separated into ingestion, streaming transformation, orchestration, warehouse output, and a dashboard layer.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Python', 'Kafka', 'PySpark', 'Airflow', 'dbt', 'BigQuery', 'Docker', 'Streamlit'].map((tool) => (
                  <span key={tool} className="tech-chip">{tool}</span>
                ))}
              </div>
            </div>

            <div className="glass p-6 md:p-8">
              <p className="eyebrow">Engineering decisions</p>
              <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-5">
                {decisions.map(([tool, explanation]) => (
                  <div key={tool} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-400 mt-1 shrink-0" />
                    <p className="text-sm leading-relaxed theme-text-secondary"><strong className="theme-text">{tool}:</strong> {explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
