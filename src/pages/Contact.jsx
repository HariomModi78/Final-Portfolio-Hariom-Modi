import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Download, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';
import ChapterLabel from '../components/ChapterLabel';
import CornerStamps from '../components/CornerStamps';
import citySkylineImg from '../assets/images/city-skyline-panel.png';
import { animateSection } from '../animations/animations';

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const cleanup = animateSection(containerRef);
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please provide a message of at least 10 characters';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const triggerMailtoFallback = () => {
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setApiError(null);

    const accessKey = personalInfo.web3FormsAccessKey;

    if (accessKey && accessKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: formData.name,
            email: formData.email,
            subject: `[Portfolio Inquiry] ${formData.subject}`,
            message: formData.message,
            from_name: `${formData.name} (Portfolio Inquiry)`,
            botcheck: false
          })
        });

        const data = await response.json();

        if (data.success) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          confetti({
            particleCount: 85,
            spread: 70,
            origin: { y: 0.6 }
          });
        } else {
          setApiError(data.message || 'Direct delivery failed. Opening email client fallback...');
          triggerMailtoFallback();
        }
      } catch (err) {
        setApiError('Network error. Opening email client fallback...');
        triggerMailtoFallback();
      }
    } else {
      // Fallback to mailto when access key is pending
      triggerMailtoFallback();
    }
  };

  return (
    <div className="page-wrapper contact-page" ref={containerRef}>
      <CornerStamps positions={['top-left', 'bottom-right']} />

      <section className="section contact-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <ChapterLabel chapter="FINAL CHAPTER" title="LET'S CONNECT" />
            <h1 className="section-title">
              HAVE AN IDEA? <br />
              <span className="text-red">LET'S BUILD IT.</span>
            </h1>
            <p className="section-subtitle">
              "I'm always interested in technology, software development, problem solving, and building meaningful digital products."
            </p>
          </div>

          <div className="contact-main-grid">
            {/* Left Column: Direct Info & Manga Panels */}
            <div className="contact-info-col reveal-on-scroll">
              <div className="comic-card contact-details-card">
                <span className="chapter-badge" style={{ transform: 'none', marginBottom: '14px' }}>
                  DIRECT CHANNELS
                </span>

                {/* Email */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Mail size={22} className="text-red" />
                  </div>
                  <div>
                    <span className="contact-label">EMAIL ADDRESS</span>
                    <a href={`mailto:${personalInfo.email}`} className="contact-val email-link">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Phone size={22} className="text-red" />
                  </div>
                  <div>
                    <span className="contact-label">PHONE NUMBER</span>
                    <a href={`tel:${personalInfo.phone}`} className="contact-val">
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <MapPin size={22} className="text-red" />
                  </div>
                  <div>
                    <span className="contact-label">LOCATION</span>
                    <span className="contact-val">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="contact-socials-box">
                  <span className="contact-label">PROFESSIONAL PROFILES</span>
                  <div className="social-pill-row">
                    <a 
                      href={personalInfo.socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-neo btn-neo-secondary btn-neo-sm"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href={personalInfo.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-neo btn-neo-secondary btn-neo-sm"
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Resume Download in Contact Section as requested */}
                <div className="contact-resume-cta" style={{ marginTop: '20px', paddingTop: '16px', borderTop: '2px solid var(--border-color)' }}>
                  <a 
                    href={personalInfo.resumeUrl}
                    download="Hariom_Modi_Resume.pdf"
                    className="btn-neo btn-neo-primary"
                    style={{ width: '100%' }}
                    title="Download Hariom Modi Resume PDF"
                  >
                    <Download size={18} />
                    <span>DOWNLOAD RESUME (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Manga Graphics Row */}
              <div className="contact-manga-art-row">
                <div className="contact-response-badge manga-panel">
                  <div className="resp-badge-header">
                    <span className="resp-badge-dot"></span>
                    <span>ACTIVE INBOX</span>
                  </div>
                  <div className="resp-badge-body">
                    <span className="resp-badge-time">⚡ &lt; 24H</span>
                    <span className="resp-badge-sub">DIRECT RESPONSE</span>
                  </div>
                  <div className="resp-badge-corner" aria-hidden="true"></div>
                </div>

                <div className="manga-panel contact-skyline-frame">
                  <img src={citySkylineImg} alt="City Skyline Comic Panel" />
                  <div className="contact-tag-badge">
                    <span className="comic-note" style={{ fontSize: '1rem' }}>
                      Ready to Build!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-col reveal-on-scroll">
              <div className="comic-card contact-form-card">
                <div className="form-card-header">
                  <span className="chapter-badge" style={{ transform: 'none', marginBottom: '8px' }}>
                    SEND A MESSAGE
                  </span>
                  <h3 className="form-title">Start a Conversation</h3>
                </div>

                {isSubmitted ? (
                  <div className="form-success-box">
                    <CheckCircle2 size={48} className="text-red" />
                    <h3 className="success-title">
                      {personalInfo.web3FormsAccessKey ? 'Message Sent Successfully!' : 'Message Drafted!'}
                    </h3>
                    <p className="success-desc">
                      Thank you, <strong>{formData.name}</strong>. {personalInfo.web3FormsAccessKey 
                        ? `Your message has been delivered directly to ${personalInfo.email}. Hariom will review and reply within 24 hours.`
                        : `Your inquiry has been routed directly to ${personalInfo.email}.`}
                    </p>
                    <button 
                      className="btn-neo btn-neo-primary"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="contact-form">
                    {/* Hidden botcheck honeypot for anti-spam */}
                    <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                    {apiError && (
                      <div className="form-error-notice">
                        <AlertCircle size={16} />
                        <span>{apiError}</span>
                      </div>
                    )}
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="text-red">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Recruiter / Engineering Manager"
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                      />
                      {errors.name && (
                        <span className="error-text">
                          <AlertCircle size={14} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="text-red">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@company.com"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                      />
                      {errors.email && (
                        <span className="error-text">
                          <AlertCircle size={14} /> {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject <span className="text-red">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Full Stack Developer Opportunity / Software Engineering Role"
                        className={`form-input ${errors.subject ? 'input-error' : ''}`}
                      />
                      {errors.subject && (
                        <span className="error-text">
                          <AlertCircle size={14} /> {errors.subject}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-red">*</span>
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share project details, role specifications, or questions..."
                        className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      ></textarea>
                      {errors.message && (
                        <span className="error-text">
                          <AlertCircle size={14} /> {errors.message}
                        </span>
                      )}
                    </div>

                    <button 
                      type="submit" 
                      className="btn-neo btn-neo-primary btn-submit-form"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>PREPARING...</span>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
