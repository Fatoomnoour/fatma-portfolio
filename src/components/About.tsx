import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Database, Lightbulb, Workflow } from 'lucide-react';

const perspectives = [
  { icon: Database, title: 'Who I am', text: 'A Computer Science graduate focused on building reliable data systems and practical software.' },
  { icon: Workflow, title: 'What I build', text: 'Data pipelines, streaming workflows, analytical platforms, and machine-learning integrations.' },
  { icon: Lightbulb, title: 'What I care about', text: 'Clear architecture, automation, documentation, and turning technical work into useful outcomes.' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <span className="eyebrow">About Fatma</span>
          <h2 className="section-title mt-3">A builder who explains the system.</h2>
          <p className="theme-text-secondary text-lg leading-relaxed mt-6">
            My work sits at the intersection of data engineering, backend development, and technical education. I use software fundamentals to design practical systems, then document and explain them so other people can use and learn from the work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-slate-700/30 border border-slate-700/30 mt-12">
          {perspectives.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className="bg-[#111827] p-6 min-h-48"
              >
                <Icon className="w-5 h-5 text-cyan-300" />
                <h3 className="text-lg font-semibold mt-6">{item.title}</h3>
                <p className="theme-text-secondary text-sm leading-relaxed mt-3">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="mt-10 flex flex-col md:flex-row md:items-center gap-5 p-6 border border-primary-400/15 bg-primary-400/5"
        >
          <BookOpen className="w-6 h-6 text-cyan-300 shrink-0" />
          <p className="theme-text-secondary leading-relaxed">
            <strong className="theme-text">Beyond engineering:</strong> my experience in technical education helps me break down complex concepts, structure learning workflows, and share knowledge with clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
