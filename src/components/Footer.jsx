import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col-brand">
            <Link to="/" className="navbar-brand footer-logo">
              <div className="brand-logo-box">
                <span className="brand-name">HM</span>
                <span className="brand-dot">.</span>
              </div>
            </Link>
            <p className="footer-bio">
              {personalInfo.shortIntroduction}
            </p>
            <div className="speech-bubble footer-speech">
              <span>"{personalInfo.mangaQuote}"</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col-nav">
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home (Chapter 01)</Link></li>
              <li><Link to="/about">About (Chapter 02)</Link></li>
              <li><Link to="/projects">Work (Chapter 03)</Link></li>
              <li><Link to="/skills">Arsenal (Chapter 04)</Link></li>
              <li><Link to="/education">Education (Chapter 05)</Link></li>
              <li><Link to="/contact">Contact (Final Chapter)</Link></li>
            </ul>
          </div>

          {/* Col 3: Social & Verified Channels */}
          <div className="footer-col-social">
            <h4 className="footer-heading">VERIFIED PROFILES</h4>
            <p className="footer-social-sub">Connect directly on GitHub, LinkedIn, or Email:</p>
            <div className="footer-social-buttons">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-neo btn-neo-secondary btn-icon-only"
                title="GitHub (HariomModi78)"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-neo btn-neo-secondary btn-icon-only"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={personalInfo.socials.email} 
                className="btn-neo btn-neo-secondary btn-icon-only"
                title="Email (hariommodi7898@gmail.com)"
              >
                <Mail size={20} />
              </a>
            </div>
            <div style={{ marginTop: '16px' }}>
              <a 
                href={personalInfo.resumeUrl}
                download="Hariom_Modi_Resume.pdf"
                className="btn-neo btn-neo-sm btn-neo-secondary"
                title="Download Verified Resume PDF"
              >
                <Download size={14} />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Col 4: Back to Top */}
          <div className="footer-col-action">
            <button 
              onClick={scrollToTop} 
              className="btn-neo btn-neo-primary footer-back-top-btn"
              title="Scroll to top of page"
            >
              <ArrowUp size={20} />
              <span>TOP</span>
            </button>
            <span className="comic-note" style={{ fontSize: '1rem', marginTop: '8px' }}>
              Back to Start ↑
            </span>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>Hariom Modi</strong> — Software Engineer | Full Stack Developer (MERN).
          </p>
          <div className="footer-tags">
            <span className="footer-pill-tag">REACT</span>
            <span className="footer-pill-tag">VITE</span>
            <span className="footer-pill-tag">GSAP</span>
            <span className="footer-pill-tag">LENIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
