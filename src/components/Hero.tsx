import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, BarChart3, Database, GitBranch, Radio } from 'lucide-react';

const flow = [
  { label: 'EVENTS', tool: 'Python', icon: Radio },
  { label: 'INGEST', tool: 'Kafka', icon: Radio },
  { label: 'PROCESS', tool: 'Spark', icon: GitBranch },
  { label: 'ANALYZE', tool: 'Warehouse', icon: Database },
  { label: 'DECIDE', tool: 'Insights', icon: BarChart3 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[78vh] flex items-center pt-24 pb-16 overflow-hidden hero-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950/95 dark:to-slate-900" />
      <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-teal-400/10 dark:bg-teal-400/5 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <div className="eyebrow flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(13,148,136,0.4)] dark:bg-primary-400 dark:shadow-[0_0_8px_rgba(45,212,191,0.4)]" />
              Data Engineer · AI · Data Systems
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.03]">
              Building scalable <span className="text-gradient">data pipelines</span> &amp; AI systems.
            </h1>
            <p className="mt-7 text-lg sm:text-xl leading-relaxed theme-text-secondary max-w-xl">
              Building scalable data pipelines, AI-powered solutions, and backend systems using Python, SQL, and modern data technologies.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a href="#featured" className="button-primary">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://github.com/Fatoomnoour" target="_blank" rel="noopener noreferrer" className="button-secondary">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/fatma-nour-ai-trainer" target="_blank" rel="noopener noreferrer" className="button-secondary">
                LinkedIn
              </a>
              <a href="#contact" className="button-secondary border-transparent">
                Contact
              </a>
            </div>
            <p className="mt-7 text-xs font-mono theme-text-muted">// Data Engineer-first · systems over tool lists</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative"
          >
            <div className="technical-panel p-5 sm:p-7">
              <div className="flex items-center justify-between pb-5 border-b theme-divider">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">Data flow / 001</p>
                  <p className="font-mono text-sm theme-text-muted mt-2">raw_data → useful_decisions</p>
                </div>
                <span className="status-dot"><span /> system map</span>
              </div>
              <div className="py-8 space-y-3">
                {flow.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <div key={stage.label} className="hero-flow-row">
                      <span className="text-[10px] font-mono text-slate-500 w-6">0{index + 1}</span>
                      <span className="pipeline-icon"><Icon className="w-4 h-4 text-primary-600 dark:text-primary-400" /></span>
                      <span className="flex-1">
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500">{stage.label}</span>
                        <span className="block text-sm font-semibold mt-1">{stage.tool}</span>
                      </span>
                      {index < flow.length - 1 && <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-600" />}
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 gap-3 pt-5 border-t theme-divider">
                <div><p className="text-xs text-slate-500">focus</p><p className="text-sm font-semibold mt-1">Reliability</p></div>
                <div><p className="text-xs text-slate-500">mode</p><p className="text-sm font-semibold mt-1">Evidence-led</p></div>
                <div><p className="text-xs text-slate-500">output</p><p className="text-sm font-semibold mt-1">Analytics</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a href="#featured" className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs theme-text-muted hover:text-primary-500 transition-colors" aria-label="Scroll to featured project">
        <span>Explore the work</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
