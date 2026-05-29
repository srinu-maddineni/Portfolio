import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Award } from 'lucide-react';

export default function About() {
  const stats = [
    {
      label: 'Professional Internship',
      value: 'Tilicho Labs',
      icon: <Briefcase style={{ height: '1.25rem', width: '1.25rem', color: 'var(--accent-teal)' }} />,
      sub: 'July 2025 - Present',
    },
    {
      label: 'Academic Background',
      value: 'B.Tech ECE',
      icon: <GraduationCap style={{ height: '1.25rem', width: '1.25rem', color: 'var(--accent-teal)' }} />,
      sub: '2022 - 2026 (Lendi)',
    },
    {
      label: 'Core Specialties',
      value: 'React & Node',
      icon: <Code style={{ height: '1.25rem', width: '1.25rem', color: 'var(--accent-teal)' }} />,
      sub: 'JavaScript & TS',
    },
    {
      label: 'Certifications',
      value: '3 Major',
      icon: <Award style={{ height: '1.25rem', width: '1.25rem', color: 'var(--accent-teal)' }} />,
      sub: 'HackerRank, Infosys, NPTEL',
    },
  ];

  return (
    <section id="about">
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
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-underline"
          />
        </div>

        <div className="about-grid">
          {/* Left Column: Bio Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="about-left"
          >
            <h3 style={{ color: 'var(--text-primary)' }}>
              Bridging Hardware Insights & Modern Software Solutions
            </h3>
            
            <p>
              Motivated B.Tech student in Electronics & Communication Engineering with strong passion for full-stack web development. Currently working as a Frontend Developer Intern at Tilicho Labs. Experienced in building responsive web applications, authentication systems, and modern user interfaces.
            </p>
            
            <p>
              My engineering background enables me to approach software development with a structured, analytical mindset. I specialize in the React.js ecosystem, writing clean and modular TypeScript code, and designing optimized architectures for modern web browsers.
            </p>

            {/* Quick Profile Summary */}
            <div className="profile-quick-details">
              <div className="profile-detail-item">
                <strong>Name: </strong>
                <span>Srinu Maddineni</span>
              </div>
              <div className="profile-detail-item">
                <strong>Email: </strong>
                <span>
                  <a href="mailto:maddineis76@gmail.com">
                    maddineis76@gmail.com
                  </a>
                </span>
              </div>
              <div className="profile-detail-item">
                <strong>Location: </strong>
                <span>Vizianagaram, AP, India</span>
              </div>
              <div className="profile-detail-item">
                <strong>Employment: </strong>
                <span style={{ color: 'var(--accent-teal)', fontWeight: 650 }}>Open to Work</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statistics Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="stat-card glass-panel"
              >
                <div className="stat-icon-container">
                  {stat.icon}
                </div>
                <h4 className="stat-value">
                  {stat.value}
                </h4>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
