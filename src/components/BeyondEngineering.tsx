import { motion } from 'framer-motion';
import { BookOpen, MessageSquare, Users } from 'lucide-react';

const pillars = [
  { icon: BookOpen, title: 'Teaching', text: 'Turn complex programming and data concepts into structured, approachable learning experiences.' },
  { icon: MessageSquare, title: 'Mentoring', text: 'Use clear documentation, examples, and feedback loops to help people move from theory to practice.' },
  { icon: Users, title: 'Community', text: 'Build collaborative learning environments through curriculum, training, and community initiatives.' },
];

export default function BeyondEngineering() {
  return (
    <section id="education" className="relative py-28 section-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">Beyond engineering</span>
          <h2 className="section-title mt-3">I build ways to make technical knowledge easier to understand.</h2>
          <p className="theme-text-secondary text-lg leading-relaxed mt-5">
            Technical education is the differentiator behind my engineering work: I do not only build systems, I explain how they work and organize knowledge so teams and learners can use it.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="glass p-6"
            >
              <Icon className="w-5 h-5 text-cyan-300" />
              <h3 className="text-lg font-semibold mt-6">{title}</h3>
              <p className="theme-text-secondary text-sm leading-relaxed mt-3">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
