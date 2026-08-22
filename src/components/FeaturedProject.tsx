import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Cpu, Network, Shield, Webhook } from 'lucide-react';
import platformImg from '../../public/images/project-platform.jpg';

const pipeline = [
  { label: 'Signals', tool: 'PPG & ECG Data', icon: Network },
  { label: 'Model', tool: 'TensorFlow / Keras', icon: Cpu },
  { label: 'Backend', tool: 'Flask REST API', icon: Webhook },
  { label: 'Security', tool: 'Environment Auth', icon: Shield },
];

const decisions = [
  ['Architecture', 'Built a modular Flask backend separating routing, model inference, and data validation.'],
  ['AI Integration', 'Loaded pre-trained Keras models and scalers efficiently into the API lifecycle.'],
  ['Data Handling', 'Implemented robust preprocessing to shape incoming signals for model prediction.'],
  ['Security', 'Secured the application by removing hardcoded credentials and enforcing environment variables.'],
];

export default function FeaturedProject() {
  return (
    <section id="featured" className="relative py-28">
      {/* ABP API Project */}
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
            <h2 className="section-title mt-3">ABP Estimation API</h2>
            <p className="theme-text-secondary max-w-2xl mt-4 text-lg">
              A backend architecture serving machine learning predictions for Arterial Blood Pressure.
            </p>
          </div>
          <a
            href="https://github.com/Fatoomnoour/abp-api"
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
                <p className="text-xs uppercase tracking-[0.2em] text-primary-300">System Architecture</p>
                <p className="text-sm theme-text-muted font-mono mt-2">abp_inference_api</p>
              </div>
              <span className="status-dot"><span /> evidence-led</span>
            </div>
            
            <div className="relative h-48 mb-8 rounded-xl overflow-hidden border theme-border bg-slate-100 dark:bg-slate-900">
              <img src={platformImg} alt="ABP API visualization" className="w-full h-full object-cover opacity-60 mix-blend-multiply dark:mix-blend-normal" />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1E293B] to-transparent" />
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
                Healthcare prediction models require a robust backend to serve inference requests securely and efficiently. This project wraps a deep learning model into a production-ready REST API, handling incoming signal data and returning estimated blood pressure values.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Python', 'Flask', 'TensorFlow', 'Keras', 'REST API', 'Data Validation'].map((tool) => (
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

        {/* Stress Detection Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-32 mb-10"
        >
          <div>
            <span className="eyebrow">Machine Learning</span>
            <h2 className="section-title mt-3">Stress Detection ML Pipeline</h2>
            <p className="theme-text-secondary max-w-2xl mt-4 text-lg">
              A structured machine learning workflow from raw data collection to model evaluation.
            </p>
          </div>
          <a
            href="https://github.com/Fatoomnoour/Stress-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200 transition-colors"
          >
            Explore the repository <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <div className="glass p-6 md:p-8">
              <p className="eyebrow">The workflow</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium">
                <span className="px-3 py-1.5 rounded-lg theme-bg-card border theme-border">Data Collection</span>
                <span className="text-primary-600/40 dark:text-primary-500/50">→</span>
                <span className="px-3 py-1.5 rounded-lg theme-bg-card border theme-border">Cleaning</span>
                <span className="text-primary-600/40 dark:text-primary-500/50">→</span>
                <span className="px-3 py-1.5 rounded-lg theme-bg-card border theme-border">Feature Engineering</span>
                <span className="text-primary-600/40 dark:text-primary-500/50">→</span>
                <span className="px-3 py-1.5 rounded-lg theme-bg-card border theme-border">Model Training</span>
                <span className="text-primary-600/40 dark:text-primary-500/50">→</span>
                <span className="px-3 py-1.5 rounded-lg theme-bg-card border theme-border">Evaluation</span>
              </div>
              <p className="text-lg leading-relaxed mt-6 theme-text-secondary">
                This project demonstrates a complete EDA and modeling process. It focuses on cleaning noisy datasets, extracting relevant features, and applying Scikit-learn models to predict stress levels based on physiological inputs.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Python', 'Pandas', 'Scikit-learn', 'EDA', 'Feature Engineering'].map((tool) => (
                  <span key={tool} className="tech-chip">{tool}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="technical-panel p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary-300">ML Pipeline</p>
                <p className="text-sm theme-text-muted font-mono mt-2">stress_detection_model</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border theme-border rounded-xl">
                <p className="text-xs uppercase tracking-widest theme-text-muted mb-1">Dataset</p>
                <p className="font-medium text-sm">Physiological sensor data (processed via Pandas)</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border theme-border rounded-xl">
                <p className="text-xs uppercase tracking-widest theme-text-muted mb-1">Models Applied</p>
                <p className="font-medium text-sm">Classification algorithms evaluated for accuracy</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border theme-border rounded-xl">
                <p className="text-xs uppercase tracking-widest theme-text-muted mb-1">Outcome</p>
                <p className="font-medium text-sm">Predictive pipeline with established evaluation metrics</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
