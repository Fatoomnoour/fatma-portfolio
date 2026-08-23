import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Brain, GraduationCap, Heart, BookOpen, Rocket, Trophy, Users } from 'lucide-react';

const experience = [
  { badge: '2026 – Present', title: 'AI & Data Engineer Trainee', org: 'Digilians', desc: 'AI/ML development, data pipeline engineering, and practical data systems', icon: Brain, current: true },
  { badge: '2025', title: 'Founder & CEO', org: 'Kids Coding Hub', desc: 'Established own coding academy for kids, built team and curriculum from scratch', icon: Rocket },
  { badge: '2023–2024', title: 'Content Lead & Team Manager', org: 'Schoola Academy', desc: 'Led content strategy, mentoring, and quality assurance across programs', icon: BookOpen },
  { badge: '2023', title: 'Programming Instructor', org: 'Codk Academy', desc: 'Taught coding to kids, developed initial teaching methodology and course materials', icon: BookOpen },
  { badge: '2022–2023', title: 'Head Mentor (TOT) & Team Leader', org: 'Engineer Academy', desc: 'Managed 20+ instructors, developed training programs and certification paths', icon: Users },
  { badge: '2021', title: 'Volunteer', org: 'Skills Area & GDG HR', desc: 'Taught programming & soft skills, community engagement and team coordination', icon: Heart },
];

const education = [
  { badge: '2025', title: 'Bachelor of Computer Science', org: 'Minya University', desc: 'Computer Science graduate with a foundation in algorithms, data structures, and software development', icon: GraduationCap },
  { badge: 'University', title: 'ICPC Contestant', org: 'Minya University', desc: 'Competitive problem solving training, algorithm design and data structures', icon: Trophy },
];

function Timeline({ items }: { items: typeof experience }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return <div ref={ref} className="relative"><div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-slate-300 to-transparent dark:via-slate-700" aria-hidden="true" /><div className="space-y-5">{items.map((item, index) => { const Icon = item.icon; return <motion.article key={`${item.badge}-${item.title}`} initial={{ opacity: 0, x: -14 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.35, delay: index * 0.07 }} className="relative flex gap-5"><div className={`relative z-10 w-10 h-10 rounded-full ${item.current ? 'bg-primary-600' : 'theme-bg-card border-2 border-primary-600/40'} flex items-center justify-center shrink-0`}><Icon className={`w-4 h-4 ${item.current ? 'text-white' : 'text-primary-700 dark:text-primary-300'}`} aria-hidden="true" /></div><div className={`theme-bg-card border rounded-2xl p-5 flex-1 card-hover ${item.current ? 'border-primary-600/40' : 'theme-border'}`}><div className="flex flex-wrap items-center gap-2"><span className="text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-500/10 px-2.5 py-1 rounded-md">{item.badge}</span>{item.current && <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md">Current</span>}</div><h3 className="text-lg font-semibold mt-3">{item.title}</h3><p className="text-sm theme-text-muted mt-1">{item.org}</p><p className="text-sm theme-text-secondary mt-2 leading-relaxed">{item.desc}</p></div></motion.article>; })}</div></div>;
}

export default function Journey() {
  return (
    <section id="journey" className="py-24 lg:py-28 section-bg-alt" aria-labelledby="journey-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12"><span className="eyebrow">Experience & journey</span><h2 id="journey-title" className="section-title mt-3">From teaching teams to data systems.</h2><p className="theme-text-secondary mt-4 leading-relaxed">Every step has strengthened my ability to learn quickly, communicate clearly, and build practical engineering solutions.</p></div>
        <Timeline items={experience} />

        <div id="education" className="pt-24 mt-20 border-t theme-divider" aria-labelledby="education-title">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"><div><span className="eyebrow">Education & certifications</span><h2 id="education-title" className="section-title mt-3">A foundation for continuous learning.</h2></div><a href="https://learn.microsoft.com/en-us/users/fatmaelzahraanoureldin-3362/credentials/579FE70E3F8825B1?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="button-secondary self-start">Verify DP-900 <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a></div>
          <Timeline items={education} />
          <div className="theme-bg-card border theme-border rounded-2xl p-5 mt-5"><p className="text-sm font-semibold">Microsoft Certified: Azure Data Fundamentals</p><p className="text-sm theme-text-secondary mt-1">DP-900 · Earned July 15, 2026</p></div>
        </div>
      </div>
    </section>
  );
}
