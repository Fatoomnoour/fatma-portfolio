import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Eye, Layers, Tag } from 'lucide-react';

const projects = [
  {
    title: 'ETL Pipeline with SSIS',
    description:
      'End-to-end ETL data pipeline built with SQL Server Integration Services (SSIS). Extracts data from multiple sources, applies complex transformations, and loads into a structured data warehouse for analytics and reporting.',
    image: '/images/project-etl.jpg',
    tags: ['SSIS', 'ETL', 'SQL Server', 'Data Warehouse'],
    category: 'data',
    highlights: ['Data Pipeline', 'SSIS Packages', 'Automated Workflow'],
    link: 'https://github.com/Fatoomnoour/ETL',
  },
  {
    title: 'Kids Coding Hub Curriculum Suite',
    description:
      'Complete coding curriculum package for ages 6-16 covering Scratch, Python, and Web Development. Includes lesson plans, project templates, and assessment rubrics used across multiple academies.',
    image: '/images/project-curriculum.jpg',
    tags: ['Curriculum Design', 'Scratch', 'Python', 'Web Dev'],
    category: 'education',
    highlights: ['Ages 6-16', '3 Programming Tracks', 'Complete Package'],
    link: 'https://fatoomnoour.github.io/kidscodinghub-Scratch3_Course/',
  },
  {
    title: 'Interactive Learning Platform',
    description:
      'Developed engaging educational content and interactive exercises for online learning delivery. Features progress tracking, gamified elements, and adaptive difficulty levels.',
    image: '/images/project-platform.jpg',
    tags: ['E-Learning', 'Interactive', 'Content Design'],
    category: 'education',
    highlights: ['Adaptive Learning', 'Progress Tracking', 'Gamified'],
    link: null,
  },
  {
    title: 'Instructor Training Program',
    description:
      'Created comprehensive TOT (Training of Trainers) program for onboarding and developing coding instructors. Scaled to support 20+ instructors across multiple locations.',
    image: '/images/project-training.jpg',
    tags: ['TOT', 'Training', 'Mentorship'],
    category: 'leadership',
    highlights: ['20+ Instructors', 'Multi-location', 'Certification'],
    link: null,
  },
  {
    title: 'Gamified Coding Challenges',
    description:
      'Designed fun, age-appropriate coding challenges and competitions to motivate young learners. Includes achievement systems, leaderboards, and team-based challenges.',
    image: '/images/project-gamified.jpg',
    tags: ['Gamification', 'Challenges', 'Fun Learning'],
    category: 'education',
    highlights: ['Achievement System', 'Leaderboards', 'Team Challenges'],
    link: null,
  },
];

const categories = ['all', 'data', 'education', 'leadership'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="theme-text-secondary max-w-xl mx-auto">
            A showcase of data engineering solutions, educational programs, and tech initiatives I've built and led.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium capitalize transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white! shadow-lg shadow-primary-500/30'
                  : 'glass theme-text-secondary hover:text-primary-400 hover:border-primary-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                {/* Overlay on hover */}
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  className="absolute inset-0 bg-primary-600/20 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-500/30 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-5 h-5 text-white!" />
                    </a>
                  )}
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-500/30 transition-colors cursor-pointer">
                    <Eye className="w-5 h-5 text-white!" />
                  </div>
                </motion.div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg glass text-xs font-medium text-primary-300 capitalize">
                    <Layers className="w-3 h-3 inline mr-1" />
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-1.5 rounded-lg hover:bg-primary-500/10 text-primary-400 transition-colors"
                      title="View on GitHub"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-lg bg-primary-500/10 text-primary-400 text-xs font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t theme-divider">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-md theme-bg-card theme-text-muted text-xs"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                🎓
              </span>
              Education & Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { institution: 'Minya University', title: 'Bachelor of Computer Science', year: '2025' },
                { institution: 'Digilians', title: 'AI & Data Engineering Training', year: '2026-Present' },
                { institution: 'ICPC', title: 'Problem Solving & Algorithms', year: 'University Level' },
                { institution: 'TOT Certification', title: 'Training of Trainers', year: '2022' },
              ].map((cert, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl theme-bg-card hover:border-primary-500/20 transition-colors border theme-border"
                >
                  <h4 className="font-semibold text-sm">{cert.institution}</h4>
                  <p className="theme-text-secondary text-xs mt-1">{cert.title}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-md bg-primary-500/10 text-primary-400 text-xs font-medium">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
