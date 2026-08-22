import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ExternalLink, Layers, Tag } from 'lucide-react';
import curriculumImg from '../../public/images/project-curriculum.jpg';
import platformImg from '../../public/images/project-platform.jpg';
import trainingImg from '../../public/images/project-training.jpg';

const projects = [
  {
    title: 'PharmStock Data Platform',
    description: 'End-to-end data engineering pipeline processing pharmacy inventory events through Kafka, Spark, Airflow, and BigQuery.',
    image: platformImg,
    tags: ['Kafka', 'PySpark', 'Airflow', 'BigQuery'],
    category: 'Data Engineering',
    link: 'https://github.com/Fatoomnoour/pharmstock-ai-data-platform',
  },
  {
    title: 'Stress Detection ML Model',
    description: 'Machine learning pipeline for stress detection, covering data collection, cleaning, feature engineering, and model evaluation.',
    image: curriculumImg,
    tags: ['Python', 'Scikit-learn', 'Pandas', 'EDA'],
    category: 'Machine Learning',
    link: 'https://github.com/Fatoomnoour/Stress-Detection',
  },
  {
    title: 'Kids Coding Hub Curriculum',
    description: 'A structured coding curriculum covering Scratch, Python, and Web Development for young learners.',
    image: trainingImg,
    tags: ['Curriculum Design', 'Python', 'Education'],
    category: 'Technical Education',
    link: 'https://www.facebook.com/Kids.Coding.Hub',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12"
        >
          <div>
            <span className="eyebrow">More projects</span>
            <h2 className="section-title mt-3">Supporting systems and learning work.</h2>
          </div>
          <a href="https://github.com/Fatoomnoour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200 transition-colors">
            View all repositories <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass overflow-hidden group"
            >
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img src={project.image} alt="" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <span className="absolute left-5 bottom-4 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-200">
                  <Layers className="w-3.5 h-3.5" /> {project.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="shrink-0 text-primary-300 hover:text-primary-200 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed mt-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => <span key={tag} className="tech-chip"><Tag className="w-3 h-3 mr-1.5" />{tag}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-16 pt-8 border-t theme-divider"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <span className="eyebrow">Certification</span>
              <h3 className="text-xl font-semibold mt-2">Microsoft Certified: Azure Data Fundamentals</h3>
              <p className="text-sm theme-text-secondary mt-2">DP-900 · Earned July 15, 2026</p>
            </div>
            <a href="https://learn.microsoft.com/en-us/users/fatmaelzahraanoureldin-3362/credentials/579FE70E3F8825B1?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="button-secondary self-start sm:self-auto">
              Verify credential <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
