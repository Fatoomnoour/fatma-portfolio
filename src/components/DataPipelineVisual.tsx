import { motion } from 'framer-motion';
import { ArrowDown, Database, FileSpreadsheet, LineChart, Server, Settings } from 'lucide-react';

const steps = [
  { label: 'Data Source', icon: FileSpreadsheet },
  { label: 'ETL Processing', icon: Settings },
  { label: 'Database', icon: Database },
  { label: 'Analytics / AI Model', icon: Server },
  { label: 'Business Insights', icon: LineChart },
];

export default function DataPipelineVisual() {
  return (
    <div className="mt-12 p-8 glass rounded-2xl">
      <p className="eyebrow mb-8 text-center">Pipeline Architecture</p>
      <div className="flex flex-col items-center max-w-sm mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-full flex items-center justify-center gap-3 p-4 bg-dark-900 border theme-border rounded-xl">
                <Icon className="w-5 h-5 text-primary-400" />
                <span className="font-medium text-sm">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="py-2 text-primary-500/50">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
