import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, ExternalLink } from 'lucide-react';

export default function Education() {
  const certifications = [
    {
      title: 'JavaScript (Intermediate)',
      issuer: 'HackerRank',
      date: 'Verified Certificate',
      link: 'https://leetcode.com/u/srinu_maddineni',
    },
    {
      title: 'Frontend Developer Program',
      issuer: 'Infosys Springboard',
      date: 'Professional Certificate',
      link: '#',
    },
    {
      title: 'Database Management System (DBMS)',
      issuer: 'NPTEL',
      date: 'Coursework Certification',
      link: '#',
    },
  ];

  return (
    <section id="education">
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
            Education & Certifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-underline"
          />
        </div>

        {/* Education & Certs Grid */}
        <div className="education-grid">
          {/* Left Column: Education */}
          <div className="education-column">
            <h3 className="education-column-title">
              <GraduationCap style={{ height: '1.4rem', width: '1.4rem' }} />
              <span>Academic Pathway</span>
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="education-card glass-panel"
            >
              {/* Institution and Duration */}
              <div className="education-card-header">
                <span className="education-card-badge">
                  B.Tech Program
                </span>
                <span className="education-card-date">
                  <Calendar style={{ height: '0.9rem', width: '0.9rem' }} />
                  2022 - 2026
                </span>
              </div>

              <h4 className="education-card-title">
                Lendi Institute of Engineering and Technology
              </h4>
              <p className="education-card-subtitle">
                Bachelor of Technology in Electronics and Communication Engineering
              </p>

              {/* Coursework & Activities */}
              <div className="education-details">
                <h5 className="education-details-title">
                  <BookOpen style={{ height: '0.9rem', width: '0.9rem' }} />
                  <span>Key Coursework & Domains:</span>
                </h5>
                <div className="education-details-tags">
                  <span className="education-details-tag">Data Structures & Algorithms</span>
                  <span className="education-details-tag">Database Management Systems</span>
                  <span className="education-details-tag">Computer Networks</span>
                  <span className="education-details-tag">Object-Oriented Programming</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Certifications */}
          <div className="education-column">
            <h3 className="education-column-title">
              <Award style={{ height: '1.4rem', width: '1.4rem', color: 'var(--accent-teal)' }} />
              <span>Certifications</span>
            </h3>

            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="certification-card glass-panel"
                >
                  <div className="certification-details-container">
                    <div className="certification-icon">
                      <Award style={{ height: '1.25rem', width: '1.25rem' }} />
                    </div>
                    <div>
                      <h4 className="certification-title">
                        {cert.title}
                      </h4>
                      <p className="certification-meta">
                        {cert.issuer} • <span>{cert.date}</span>
                      </p>
                    </div>
                  </div>

                  {cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="certification-verify-link"
                      title="Verify Certificate"
                    >
                      <ExternalLink style={{ height: '1.15rem', width: '1.15rem' }} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
