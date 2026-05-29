import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  github: string;
  demo: string;
}

const GithubIcon = ({ style }: { style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Netflix UI/UX Clone',
      description:
        'Built a responsive streaming platform that clones the core features of Netflix, enabling immersive movie browsing, content searches, and instant trailer playback with Firebase user accounts.',
      image: '/netflix-clone.png',
      tags: ['React.js', 'Node.js', 'TMDb API', 'YouTube API', 'Firebase Auth'],
      features: [
        'Real-time Movie Search & Filtering',
        'Dynamic YouTube Trailer Playback modal',
        'Secure Google Authentication via Firebase SDK',
        'Fully responsive grid layout matching Netflix branding',
        'React Router navigation with nested routing configurations',
      ],
      github: 'https://github.com/srinu-maddineni',
      demo: 'https://github.com/srinu-maddineni',
    },
    {
      title: 'Task Management Web Application',
      description:
        'Full-stack task management and collaboration board allowing teams to coordinate workloads. Includes server-side database schema validation with MongoDB storage.',
      image: '/task-manager.png',
      tags: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      features: [
        'Secure CRUD operations for tasks and subtasks',
        'Status tracking (Create, Edit, Delete, Mark Complete)',
        'Optimized MongoDB schema structure with index optimization',
        'Clean modular controller architecture for handling requests',
        'Robust client-side state handling and synchronization',
      ],
      github: 'https://github.com/srinu-maddineni',
      demo: 'https://github.com/srinu-maddineni',
    },
  ];

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="projects">
      <div className="max-width-container">
        {/* Section Heading */}
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-underline"
          />
          <p className="section-subtitle">
            Demonstrating clean code practices, responsive layouts, and full-stack software development principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="project-card glass-panel"
            >
              {/* Image Container with overlays */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                
                {/* Overlay Links on Hover */}
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-overlay-link"
                    title="View Source Code"
                  >
                    <GithubIcon style={{ height: '1.4rem', width: '1.4rem' }} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-overlay-link"
                    title="Live Demo"
                  >
                    <ExternalLink style={{ height: '1.4rem', width: '1.4rem' }} />
                  </a>
                </div>

                {/* Tech Badge over image (Mobile visible) */}
                <div className="project-badge">
                  <Sparkles style={{ height: '0.75rem', width: '0.75rem' }} />
                  <span>Interactive App</span>
                </div>
              </div>

              {/* Card content */}
              <div className="project-content">
                {/* Title */}
                <h3 className="project-card-title">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="project-card-desc">
                  {project.description}
                </p>

                {/* Tags List */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features Accordion Toggle */}
                <div className="project-features-toggle-container">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="project-features-toggle"
                  >
                    <span>{expandedIndex === index ? 'Hide Key Features' : 'Show Key Features'}</span>
                    {expandedIndex === index ? (
                      <ChevronUp style={{ height: '1.15rem', width: '1.15rem' }} />
                    ) : (
                      <ChevronDown style={{ height: '1.15rem', width: '1.15rem' }} />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <ul className="project-features-list">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="project-feature-item">
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
