import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, BarChart3, Database, Download, GitBranch, Radio } from 'lucide-react';

const resumeHref = `${import.meta.env.BASE_URL}Fatma_Nour_Data_Engineer_Resume.pdf`;

const flow = [
  { label: 'EVENTS', tool: 'Python', icon: Radio },
  { label: 'INGEST', tool: 'Kafka', icon: Radio },
  { label: 'PROCESS', tool: 'Spark', icon: GitBranch },
  { label: 'ANALYZE', tool: 'Warehouse', icon: Database },
  { label: 'DECIDE', tool: 'Insights', icon: BarChart3 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[78vh] flex items-center pt-28 pb-20 overflow-hidden hero-grid" aria-labelledby="hero-title">
      <div className="absolute inset-0 hero-surface" aria-hidden="true" />
      <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-teal-400/10 dark:bg-teal-400/5 blur-[100px]" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-2xl">
            <div className="eyebrow flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" aria-hidden="true" />
              Junior Data Engineer · Backend · AI Data
            </div>
            <h1 id="hero-title" className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.03]">
              Turning raw data into <span className="text-gradient">reliable systems.</span>
            </h1>
            <p className="mt-7 text-lg sm:text-xl leading-relaxed theme-text-secondary max-w-xl">
              I&apos;m Fatma Nour, a Junior Data Engineer building practical ETL pipelines, backend APIs, and AI-enabled data solutions with Python, SQL, and modern data tools.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-9">
              <a href="#projects" className="button-primary">
                View My Work <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href={resumeHref} download className="button-secondary">
                Download Resume <Download className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="button-secondary">
                Let&apos;s Connect
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-7 text-sm theme-text-muted">
              <span>Python</span><span>SQL</span><span>Kafka</span><span>PySpark</span><span>Airflow</span><span>BigQuery</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.12 }} className="relative">
            <div className="technical-panel p-5 sm:p-7">
              <div className="flex items-center justify-between pb-5 border-b theme-divider gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">Data flow / 001</p>
                  <p className="font-mono text-sm theme-text-muted mt-2">raw_data → useful_decisions</p>
                </div>
                <span className="status-dot"><span aria-hidden="true" /> system map</span>
              </div>
              <div className="py-8 space-y-3" aria-label="Example data engineering flow">
                {flow.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <div key={stage.label} className="hero-flow-row">
                      <span className="text-[10px] font-mono theme-text-muted w-6">0{index + 1}</span>
                      <span className="pipeline-icon"><Icon className="w-4 h-4 text-primary-700 dark:text-primary-300" aria-hidden="true" /></span>
                      <span className="flex-1">
                        <span className="block text-[10px] uppercase tracking-[0.18em] theme-text-muted">{stage.label}</span>
                        <span className="block text-sm font-semibold mt-1">{stage.tool}</span>
                      </span>
                      {index < flow.length - 1 && <ArrowRight className="w-4 h-4 theme-text-muted" aria-hidden="true" />}
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 gap-3 pt-5 border-t theme-divider">
                <div><p className="text-xs theme-text-muted">focus</p><p className="text-sm font-semibold mt-1">Reliability</p></div>
                <div><p className="text-xs theme-text-muted">mode</p><p className="text-sm font-semibold mt-1">Evidence-led</p></div>
                <div><p className="text-xs theme-text-muted">output</p><p className="text-sm font-semibold mt-1">Analytics</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <a href="#highlights" className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs theme-text-muted hover:text-primary-700 dark:hover:text-primary-300 transition-colors rounded-md" aria-label="Scroll to highlights">
        <span>Explore the work</span><ArrowDown className="w-4 h-4" aria-hidden="true" />
      </a>
    </section>
  );
}
