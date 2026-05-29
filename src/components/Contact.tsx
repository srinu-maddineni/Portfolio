import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, X } from 'lucide-react';

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

const LinkedinIcon = ({ style }: { style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const contactInfo = [
    {
      label: 'Phone Call',
      value: '+91 8374428832',
      href: 'tel:+918374428832',
      icon: <Phone style={{ height: '1.25rem', width: '1.25rem', color: 'var(--accent-teal)' }} />,
      sub: 'Mon - Fri, 9am - 6pm IST',
    },
    {
      label: 'Email Address',
      value: 'maddineis76@gmail.com',
      href: 'mailto:maddineis76@gmail.com',
      icon: <Mail style={{ height: '1.25rem', width: '1.25rem', color: 'var(--accent-teal)' }} />,
      sub: 'Expect a response within 24h',
    },
    {
      label: 'Current Location',
      value: 'Vizianagaram, AP, India',
      href: 'https://maps.google.com/?q=Vizianagaram,Andhra+Pradesh,India',
      icon: <MapPin style={{ height: '1.25rem', width: '1.25rem', color: 'var(--accent-teal)' }} />,
      sub: 'Open to relocation & remote work',
    },
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      // Auto close toast after 5s
      setTimeout(() => setShowToast(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact">
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
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-underline"
          />
          <p className="section-subtitle">
            Have a project in mind, an opportunity, or want to discuss frontend architectures? Drop me a line!
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div>
            <h3 className="contact-column-title">Contact Channels</h3>

            <div className="contact-cards">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="contact-info-card glass-panel"
                >
                  <div className="contact-info-icon">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="contact-info-label">{info.label}</h4>
                    <p className="contact-info-value">{info.value}</p>
                    <p className="contact-info-sub">{info.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick link details card */}
            <div className="recruiter-quick-links-card glass-panel">
              <h4>Recruiter Quick Links</h4>
              <p className="recruiter-quick-links-desc">
                Connect via LinkedIn or review LeetCode algorithms to assess problem-solving skills.
              </p>
              <div className="recruiter-quick-links-buttons">
                <a
                  href="https://github.com/srinu-maddineni"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-quick-link"
                >
                  <GithubIcon style={{ height: '0.9rem', width: '0.9rem' }} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/srinu-maddineni-aa6835290/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-quick-link"
                >
                  <LinkedinIcon style={{ height: '0.9rem', width: '0.9rem' }} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <h3 className="contact-column-title">Send Message</h3>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="contact-form-card glass-panel"
            >
              <form onSubmit={handleSubmit} noValidate>
                {/* Row for Name & Email */}
                <div className="form-row">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <div className="form-input-container">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <span className="form-error">
                          <AlertCircle /> {errors.name}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <div className="form-input-container">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="form-error">
                          <AlertCircle /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <div className="form-input-container">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
                      placeholder="Freelance Project / Job Inquiry"
                    />
                    {errors.subject && (
                      <span className="form-error">
                        <AlertCircle /> {errors.subject}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <div className="form-input-container">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                      placeholder="Tell me about your project or offer..."
                    />
                    {errors.message && (
                      <span className="form-error">
                        <AlertCircle /> {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="spinner" viewBox="0 0 50 50">
                        <circle className="spinner-path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send style={{ height: '0.95rem', width: '0.95rem' }} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="success-toast"
          >
            <CheckCircle2 className="success-toast-icon" style={{ height: '1.5rem', width: '1.5rem' }} />
            <div className="success-toast-details">
              <h5 className="success-toast-title">Message Received!</h5>
              <p className="success-toast-desc">
                Thank you, Srinu will reach out to you shortly.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="success-toast-close"
              aria-label="Close Notification"
            >
              <X style={{ height: '1rem', width: '1rem' }} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
