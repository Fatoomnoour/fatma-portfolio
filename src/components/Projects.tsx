import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ExternalLink, Layers, Tag } from 'lucide-react';
const curriculumImg = `${import.meta.env.BASE_URL}images/project-curriculum.webp`;
const platformImg = `${import.meta.env.BASE_URL}images/project-platform.webp`;
const platformCardImg = `${import.meta.env.BASE_URL}images/project-platform-card.webp`;
const trainingImg = `${import.meta.env.BASE_URL}images/project-training.webp`;

type ProjectCategory = 'Data Engineering' | 'AI & Machine Learning' | 'Backend/API' | 'Education & Training';

type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  outcome: string;
  image: string;
  tags: string[];
  link: string;
  demo?: string;
  cardImage?: string;
};

const projects: Project[] = [
  {
    title: 'PharmStock Data Platform',
    category: 'Data Engineering',
    description: 'An end-to-end platform for turning pharmacy inventory events into reliable analytical data.',
    problem: 'Pharmacy inventory signals need consistent ingestion, processing, orchestration, and warehouse-ready outputs.',
    solution: 'Designed a streaming and batch-oriented pipeline that moves events through Kafka, PySpark, Airflow, and BigQuery.',
    contribution: 'Mapped the pipeline stages, implemented transformations, and documented the flow from source events to analytics.',
    outcome: 'A portfolio-ready architecture demonstrating scalable ingestion, distributed processing, orchestration, and serving.',
    image: platformImg,
    cardImage: platformCardImg,
    tags: ['Kafka', 'PySpark', 'Airflow', 'BigQuery', 'ETL'],
    link: 'https://github.com/Fatoomnoour/pharmstock-ai-data-platform',
  },
  {
    title: 'Stress Detection ML Model',
    category: 'AI & Machine Learning',
    description: 'A structured machine learning workflow covering data collection, cleaning, feature engineering, and evaluation.',
    problem: 'Noisy physiological data needs a reproducible workflow before it can support useful stress predictions.',
    solution: 'Built an EDA and modeling pipeline with Pandas and Scikit-learn to prepare features and compare classification models.',
    contribution: 'Handled data cleaning, exploratory analysis, feature engineering, and evaluation of predictive performance.',
    outcome: 'A documented predictive pipeline with established evaluation metrics and clear modeling steps.',
    image: curriculumImg,
    tags: ['Python', 'Pandas', 'Scikit-learn', 'EDA', 'Feature Engineering'],
    link: 'https://github.com/Fatoomnoour/Stress-Detection',
  },
  {
    title: 'Kids Coding Hub Curriculum',
    category: 'Education & Training',
    description: 'A structured coding curriculum covering Scratch, Python, and Web Development for young learners.',
    problem: 'Young learners need a clear progression from fundamentals to hands-on programming projects.',
    solution: 'Created a practical curriculum and delivery workflow that makes technical concepts approachable and project-based.',
    contribution: 'Founded the academy, designed learning content, and built the operational foundation for delivery and mentoring.',
    outcome: 'A repeatable learning experience supported by curriculum design, training, and community building.',
    image: trainingImg,
    tags: ['Curriculum Design', 'Python', 'Education', 'Mentoring'],
    link: 'https://www.facebook.com/Kids.Coding.Hub',
  },
];

const categories: ProjectCategory[] = ['Data Engineering', 'AI & Machine Learning', 'Backend/API', 'Education & Training'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-24 lg:py-28 section-bg-alt" aria-labelledby="projects-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12">
          <div>
            <span className="eyebrow">Case studies</span>
            <h2 id="projects-title" className="section-title mt-3">Selected work, organized by impact.</h2>
            <p className="theme-text-secondary max-w-2xl mt-4">A closer look at the systems, models, APIs, and learning programs I have built or contributed to.</p>
          </div>
          <a href="https://github.com/Fatoomnoour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 transition-colors rounded-md">
            View all repositories <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-8" aria-label="Project categories">
          {categories.map((category, index) => <span key={category} className={`tech-chip ${index === 0 ? 'border-primary-600/40 text-primary-700 dark:text-primary-300' : ''}`}>{category}</span>)}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.08 }} className="theme-bg-card border theme-border rounded-2xl overflow-hidden group card-hover flex flex-col">
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img src={project.cardImage ?? project.image} srcSet={project.cardImage ? `${project.cardImage} 756w, ${project.image} 1408w` : undefined} sizes="(max-width: 1024px) 100vw, 33vw" alt={`${project.title} project preview`} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-[1.03] transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" aria-hidden="true" />
                <span className="absolute left-5 bottom-4 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-100"><Layers className="w-3.5 h-3.5" aria-hidden="true" /> {project.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub`} className="shrink-0 text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 transition-colors rounded-md"><ExternalLink className="w-4 h-4" aria-hidden="true" /></a>
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed mt-4">{project.description}</p>
                <div className="mt-5 space-y-3 text-sm">
                  <p><strong>Problem:</strong> <span className="theme-text-secondary">{project.problem}</span></p>
                  <p><strong>Solution:</strong> <span className="theme-text-secondary">{project.solution}</span></p>
                  <p><strong>My contribution:</strong> <span className="theme-text-secondary">{project.contribution}</span></p>
                  <p><strong>Outcome:</strong> <span className="theme-text-secondary">{project.outcome}</span></p>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t theme-divider">
                  {project.tags.map((tag) => <span key={tag} className="tech-chip"><Tag className="w-3 h-3 mr-1.5" aria-hidden="true" />{tag}</span>)}
                </div>
                <div className="flex flex-wrap gap-4 mt-6 pt-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 dark:text-primary-300 rounded-md">GitHub <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold theme-text-secondary rounded-md">Live Demo <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
