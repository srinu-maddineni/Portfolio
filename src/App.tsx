import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default to dark mode (true)
  });

  const [loading, setLoading] = useState(true);

  // Sync theme with HTML root class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Handle Preloader timeout
  useEffect(() => {
    document.body.classList.add('preloader-active');
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('preloader-active');
    }, 1200);
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {loading ? (
          /* Preloader Screen */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="preloader"
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360, 360],
                  borderRadius: ["24%", "50%", "24%"]
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                style={{
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.25)',
                }}
              >
                <Terminal style={{ height: '2rem', width: '2rem', color: '#ffffff' }} />
              </motion.div>
              <motion.h1
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  fontSize: '1.125rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 'bold',
                  letterSpacing: '0.15em',
                  color: 'var(--text-secondary)',
                  marginTop: '0.5rem',
                  textTransform: 'uppercase'
                }}
              >
                Srinu Maddineni
              </motion.h1>
            </div>
          </motion.div>
        ) : (
          /* Main Application Layout */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header / Navbar */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

            {/* Sections Content */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
