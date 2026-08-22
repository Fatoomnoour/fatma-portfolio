import { motion } from 'framer-motion';
import { Database, GitBranch, Users } from 'lucide-react';

const stats = [
  { value: '1', label: 'End-to-end data platform', icon: Database },
  { value: '6+', label: 'Core engineering technologies', icon: GitBranch },
  { value: '20+', label: 'Instructors managed', icon: Users },
];

export default function StatsStrip() {
  return (
    <section aria-label="Portfolio highlights" className="relative border-y theme-border section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x theme-divider">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex items-center gap-4 px-4 py-4 md:py-2 md:justify-center"
              >
                <Icon className="w-5 h-5 text-primary-400" aria-hidden="true" />
                <div>
                  <div className="text-2xl font-bold tracking-tight text-white">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest theme-text-muted">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
