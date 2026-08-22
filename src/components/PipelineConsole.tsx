import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Database, GitBranch, Info, Play, Radio, Sparkles } from 'lucide-react';

const stages = [
  {
    id: 'ingestion',
    label: 'Ingestion',
    tool: 'Kafka',
    icon: Radio,
    color: 'text-primary-400',
    summary: 'Collect inventory events from source systems.',
    simple: 'The pipeline receives new pharmacy stock updates as they happen.',
    command: '> kafka_consumer --topic pharmacy_inventory',
  },
  {
    id: 'processing',
    label: 'Processing',
    tool: 'Spark Structured Streaming',
    icon: Activity,
    color: 'text-accent-400',
    summary: 'Transform and process streaming data with PySpark.',
    simple: 'Spark cleans and reshapes the updates so they are ready to use.',
    command: '> spark_submit --stream inventory_transform.py',
  },
  {
    id: 'orchestration',
    label: 'Orchestration',
    tool: 'Airflow + dbt',
    icon: GitBranch,
    color: 'text-amber-300',
    summary: 'Schedule and coordinate repeatable transformation workflows.',
    simple: 'Airflow makes sure each step runs in the right order.',
    command: '> airflow dags trigger pharmstock_pipeline',
  },
  {
    id: 'serving',
    label: 'Serving',
    tool: 'BigQuery + Streamlit',
    icon: Database,
    color: 'text-sky-300',
    summary: 'Prepare analytics-ready data and expose useful outputs.',
    simple: 'The cleaned data becomes useful tables and dashboard outputs.',
    command: '> publish --warehouse bigquery --view streamlit',
  },
];

export default function PipelineConsole() {
  const [activeStage, setActiveStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [simpleMode, setSimpleMode] = useState(false);
  const stage = stages[activeStage];
  const StageIcon = stage.icon;

  const runPipeline = () => {
    setIsRunning(true);
    setActiveStage(0);
    stages.forEach((_, index) => {
      window.setTimeout(() => setActiveStage(index), index * 550);
    });
    window.setTimeout(() => setIsRunning(false), stages.length * 550 + 250);
  };

  return (
    <section id="pipeline" className="relative py-24 section-bg-alt overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">Interactive Data Flow</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              See a pipeline <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">think</span>
            </h2>
            <p className="theme-text-secondary max-w-2xl mt-4 text-lg">
              A guided walkthrough of the implemented PharmStock architecture. Select a stage, or run the complete flow.
            </p>
          </div>
          <button
            type="button"
            onClick={runPipeline}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-500 text-white! font-semibold shadow-lg shadow-primary-500/20 hover:-translate-y-0.5 transition-transform duration-200 active:scale-[0.97]"
          >
            <Play className="w-4 h-4" />
            {isRunning ? 'Running flow…' : 'Run pipeline walkthrough'}
          </button>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between gap-4 border-b theme-divider pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/15 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="font-semibold">pharmstock_pipeline</p>
                  <p className="text-xs theme-text-muted font-mono">guided architecture view</p>
                </div>
              </div>
              <span className="text-xs font-mono text-accent-400">{isRunning ? 'EXECUTING' : 'READY'}</span>
            </div>

            <div className="relative mt-8">
              <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-sky-400/40" />
              <div className="space-y-4">
                {stages.map((item, index) => {
                  const Icon = item.icon;
                  const active = activeStage === index;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setActiveStage(index)}
                      className={`relative w-full flex items-center gap-4 text-left p-4 rounded-xl border transition-all duration-200 active:scale-[0.99] ${
                        active ? 'border-primary-400/50 bg-primary-500/10' : 'border-transparent hover:border-primary-500/20 hover:bg-primary-500/5'
                      }`}
                    >
                      <span className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center border ${active ? 'bg-dark-800 border-primary-400/70' : 'bg-dark-900/80 border-slate-700'}`}>
                        <Icon className={`w-4 h-4 ${active ? item.color : 'theme-text-muted'}`} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-widest theme-text-muted">0{index + 1} · {item.label}</span>
                        <span className={`block mt-1 font-semibold truncate ${active ? item.color : ''}`}>{item.tool}</span>
                      </span>
                      <ArrowRight className={`ml-auto w-4 h-4 transition-opacity ${active ? 'opacity-100 text-primary-400' : 'opacity-20'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            key={`${stage.id}-${simpleMode}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl bg-dark-900 border border-slate-700/80 p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-primary-300">stage_{String(activeStage + 1).padStart(2, '0')}</span>
                <button
                  type="button"
                  onClick={() => setSimpleMode((value) => !value)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-primary-300 transition-colors"
                  aria-pressed={simpleMode}
                >
                  <Info className="w-4 h-4" />
                  {simpleMode ? 'Technical view' : 'Explain it simply'}
                </button>
              </div>
              <h3 className="text-2xl font-bold text-white mt-8">{stage.label}</h3>
              <p className="text-primary-300 font-mono text-sm mt-2">{stage.tool}</p>
              <p className="text-slate-300 text-lg leading-relaxed mt-8">
                {simpleMode ? stage.simple : stage.summary}
              </p>
            </div>
            <div className="mt-10 border-t border-slate-700 pt-5">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">terminal output</p>
              <code className="block text-sm text-accent-300 font-mono leading-relaxed break-words">{stage.command}</code>
              <p className="text-xs text-slate-500 font-mono mt-5">This is a guided portfolio interaction, not a live production monitor.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
