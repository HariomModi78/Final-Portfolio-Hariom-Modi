import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'EDUCATION', path: '/education' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-logo-box">
            <span className="brand-name">HM</span>
            <span className="brand-dot">.</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'nav-item-active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="navbar-actions desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a 
            href={personalInfo.resumeUrl}
            download="Hariom_Modi_Resume.pdf"
            className="btn-neo btn-neo-secondary btn-neo-sm"
            title="Download Verified Resume PDF"
          >
            <Download size={14} />
            <span>RESUME</span>
          </a>
          <Link to="/contact" className="btn-neo btn-neo-primary btn-nav-cta">
            <span>LET'S TALK</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          data-lenis-prevent="true"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="mobile-drawer-panel" 
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <div className="brand-logo-box">
                <span className="brand-name">HM</span>
                <span className="brand-dot">.</span>
              </div>
              <button 
                className="drawer-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer-quote">
              <span className="chapter-badge" style={{ transform: 'none' }}>
                HARIOM MODI
              </span>
              <p className="drawer-speech">"{personalInfo.mangaQuote}"</p>
            </div>

            <nav className="mobile-nav-links">
              <NavLink 
                to="/" 
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
              >
                HOME
              </NavLink>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="mobile-drawer-footer" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a 
                href={personalInfo.resumeUrl}
                download="Hariom_Modi_Resume.pdf"
                className="btn-neo btn-neo-secondary"
                style={{ width: '100%' }}
              >
                <Download size={16} />
                <span>DOWNLOAD RESUME</span>
              </a>
              <Link to="/contact" className="btn-neo btn-neo-primary" style={{ width: '100%' }}>
                <span>LET'S TALK</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
