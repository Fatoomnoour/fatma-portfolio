import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users } from 'lucide-react';

const pillars = [
  { icon: Lightbulb, title: 'Teaching', text: 'Breaking down complex programming and data concepts into clear, practical learning steps.' },
  { icon: Users, title: 'Mentoring', text: 'Supporting instructors and learners through structured feedback, training, and shared standards.' },
  { icon: Heart, title: 'Community', text: 'Volunteering with GDG and Skills Area while building welcoming technical communities.' },
];

export default function BeyondEngineering() {
  return (
    <section id="beyond" className="relative py-24 lg:py-28" aria-labelledby="beyond-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10"><span className="eyebrow">Beyond engineering</span><h2 id="beyond-title" className="section-title mt-3">The human skills behind the systems.</h2><p className="theme-text-secondary mt-4 leading-relaxed">My education and leadership experience shape how I collaborate, document decisions, and make technical work easier to understand.</p></div>
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map(({ icon: Icon, title, text }, index) => <motion.article key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: index * 0.07 }} className="theme-bg-card border theme-border rounded-2xl p-6 card-hover"><Icon className="w-5 h-5 text-primary-700 dark:text-primary-300" aria-hidden="true" /><h3 className="text-lg font-semibold mt-5">{title}</h3><p className="theme-text-secondary text-sm leading-relaxed mt-3">{text}</p></motion.article>)}
        </div>
      </div>
    </section>
  );
}
