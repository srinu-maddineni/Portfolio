import { motion } from 'framer-motion';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    'Developed responsive React.js applications using JavaScript and TypeScript, ensuring cross-browser compatibility.',
    'Managed complex application state dynamically using modern React Hooks (useState, useEffect, useContext, useMemo).',
    'Worked with MongoDB for structured data storage, indexing, and efficient aggregation queries.',
    'Applied system design principles to build highly modular, reusable components and clean codebase architectures.',
    'Participated in code reviews, Agile sprints, and collaborative Git/GitHub team workflows.',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience">
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
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-underline"
          />
        </div>

        {/* Experience Timeline Grid */}
        <div className="experience-timeline">
          <div className="timeline-item">
            {/* Static Node representing completed role */}
            <span className="timeline-node" />

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="timeline-card glass-panel"
            >
              {/* Header Info */}
              <div className="timeline-card-header">
                <div>
                  <h3 className="timeline-card-title">
                    Frontend Developer Intern
                  </h3>
                  <div className="timeline-company-info">
                    <Building2 style={{ height: '1.15rem', width: '1.15rem' }} />
                    <span>Tilicho Labs</span>
                  </div>
                </div>
                
                {/* Date & Completed Tag */}
                <div className="timeline-meta-container">
                  <div className="timeline-date-info">
                    <Calendar style={{ height: '1rem', width: '1rem', color: 'var(--accent-teal)' }} />
                    <span>July 2025 – April 2026</span>
                  </div>
                  <span
                    className="timeline-active-badge"
                    style={{
                      backgroundColor: 'var(--accent-teal-light)',
                      color: 'var(--accent-teal)',
                      borderColor: 'var(--accent-teal-border)',
                      opacity: 0.9,
                    }}
                  >
                    Completed
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div>
                <h4 className="timeline-list-title">Key Responsibilities & Achievements:</h4>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="timeline-list"
                >
                  {responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      variants={itemVariants}
                      className="timeline-list-item"
                    >
                      <CheckCircle2 style={{ height: '1.25rem', width: '1.25rem' }} />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
