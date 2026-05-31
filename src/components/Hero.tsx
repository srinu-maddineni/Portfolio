import { motion } from 'framer-motion';
import { Mail, FileText, ArrowRight, Code } from 'lucide-react';

const GithubIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/srinu-maddineni',
      icon: <GithubIcon style={{ height: '1.25rem', width: '1.25rem' }} />,
      color: '',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/srinu-maddineni-aa6835290/',
      icon: <LinkedinIcon style={{ height: '1.25rem', width: '1.25rem' }} />,
      color: '',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/srinu_maddineni',
      icon: (
        <svg viewBox="0 0 24 24" style={{ height: '1.25rem', width: '1.25rem' }} className="fill-current" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.08.7-1.731.7-.65 0-1.266-.25-1.732-.7L3.992 14.51c-.466-.45-.722-1.047-.722-1.676 0-.63.256-1.226.722-1.677L12.12 4.985c.928-.895 2.535-.895 3.464 0l2.766 2.667c.928.896.928 2.35 0 3.245L12.022 17c-.464.448-1.217.448-1.68 0-.465-.45-.465-1.176 0-1.625l4.892-4.717c.105-.102.164-.24.164-.383 0-.144-.06-.282-.164-.383l-2.766-2.667c-.206-.2-.544-.2-.75 0L5.789 13.153c-.105.101-.164.24-.164.382 0 .143.059.28.164.382l5.952 5.75c.206.2.544.2.75 0l2.765-2.667c.2-.193.52-.193.72-.005.201.19.204.5.012.693l.88-.85zM21.928 12.33c.074-.467.074-1.04-.002-1.507-.156-.96-.69-1.85-1.487-2.48l-2.766-2.188c-.96-.757-2.316-.757-3.275 0l-5.69 4.498a.965.965 0 00-.312.71c0 .26.11.512.302.7l2.875 2.767a.97.97 0 001.378 0l4.37-4.218c.206-.2.543-.2.75 0 .205.2.205.524 0 .723l-3.328 3.21a2.89 2.89 0 01-2.025.864c-.752 0-1.472-.294-2.024-.864L7.842 11.23a.972.972 0 00-1.378 0l-2.148 2.072a.966.966 0 00-.28.694c0 .26.103.51.288.69l5.952 5.748a2.913 2.913 0 004.148 0l5.952-5.748c.797-.629 1.33-1.517 1.488-2.478z"/>
        </svg>
      ),
      color: '',
    },
    {
      name: 'Email',
      url: 'mailto:maddineis76@gmail.com',
      icon: <Mail style={{ height: '1.25rem', width: '1.25rem' }} />,
      color: '',
    },
  ];

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="max-width-container">
        <div className="hero-grid">
          {/* Text Content */}
          <div className="hero-left">
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-tag"
            >
              <Code style={{ height: '0.85rem', width: '0.85rem' }} />
              <span>Available for Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hero-title"
            >
              Hi, I'm <span>Srinu Maddineni</span>
            </motion.h1>

            {/* Job Title / Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hero-subtitle"
            >
              Frontend Developer | React.js | Node.js | Web Development
            </motion.h2>

            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hero-desc"
            >
              Passionate Frontend Developer and Electronics & Communication Engineering student focused on building modern web applications using React.js, TypeScript, Node.js, and MongoDB.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hero-actions"
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollClick(e, 'projects')}
                className="btn-primary"
              >
                <span>View Projects</span>
                <ArrowRight style={{ height: '1rem', width: '1rem' }} />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Srinu_Maddineni_Resume.pdf`}
                download="Srinu_Maddineni_Resume.pdf"
                className="btn-secondary"
              >
                <FileText style={{ height: '1.15rem', width: '1.15rem' }} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollClick(e, 'contact')}
                className="btn-text"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hero-social-connect"
            >
              <span>Connect:</span>
              <div className="social-links-container">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn-link"
                    title={social.name}
                    aria-label={`Link to Srinu's ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Code Terminal (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="terminal-card glass-panel"
          >
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot dot-red" />
                <div className="terminal-dot dot-yellow" />
                <div className="terminal-dot dot-green" />
              </div>
              <span className="terminal-filename">srinu_profile.ts</span>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body">
              <p>
                <span className="t-keyword">const</span>{' '}
                <span className="t-variable">developer</span> = &#123;
              </p>
              <p style={{ paddingLeft: '1rem' }}>
                <span className="t-property">name</span>:{' '}
                <span className="t-string">'Srinu Maddineni'</span>,
              </p>
              <p style={{ paddingLeft: '1rem' }}>
                <span className="t-property">role</span>:{' '}
                <span className="t-string">'Frontend Developer'</span>,
              </p>
              <p style={{ paddingLeft: '1rem' }}>
                <span className="t-property">education</span>:{' '}
                <span className="t-string">'B.Tech (ECE), 2022 - 2026'</span>,
              </p>
              <p style={{ paddingLeft: '1rem' }}>
                <span className="t-property">currentInternship</span>:{' '}
                <span className="t-string">'Tilicho Labs'</span>,
              </p>
              <p style={{ paddingLeft: '1rem' }}>
                <span className="t-property">skills</span>: [
              </p>
              <p style={{ paddingLeft: '2rem' }}>
                <span className="t-string">'React.js'</span>,{' '}
                <span className="t-string">'TypeScript'</span>,
              </p>
              <p style={{ paddingLeft: '2rem' }}>
                <span className="t-string">'Node.js'</span>,{' '}
                <span className="t-string">'MongoDB'</span>,
              </p>
              <p style={{ paddingLeft: '2rem' }}>
                <span className="t-string">'TailwindCSS'</span>,{' '}
                <span className="t-string">'Git/GitHub'</span>
              </p>
              <p style={{ paddingLeft: '1rem' }}>],</p>
              <p style={{ paddingLeft: '1rem' }}>
                <span className="t-property">passionateAbout</span>:{' '}
                <span className="t-string">
                  'Clean UI, Single Page Apps, System Design'
                </span>
              </p>
              <p>&#125;;</p>
              <br />
              <p className="t-comment">
                // Click View Projects below to inspect code craftsmanship
              </p>
              <p>
                <span className="t-variable">console</span>.
                <span className="t-keyword">log</span>(
                <span className="t-variable">developer</span>.
                <span className="t-property">name</span> +{' '}
                <span className="t-string">" is ready!"</span>);
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
