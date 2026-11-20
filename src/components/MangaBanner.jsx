import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import citySkylineImg from '../assets/images/city-skyline-panel.png';

export default function MangaBanner() {
  return (
    <div className="manga-cta-banner">
      {/* Left Manga Code / Status Terminal Badge (Replaces old character illustration) */}
      <div className="manga-cta-badge-wrap">
        <div className="manga-cta-terminal-card">
          <div className="cta-term-header">
            <div className="cta-term-dots">
              <span className="term-dot dot-red"></span>
              <span className="term-dot dot-yellow"></span>
              <span className="term-dot dot-green"></span>
            </div>
            <span className="cta-term-title">DEV // READY</span>
          </div>

          <div className="cta-term-body">
            <div className="cta-code-icon-row">
              <span className="cta-code-bracket">&lt;</span>
              <span className="cta-code-slash">/</span>
              <span className="cta-code-bracket">&gt;</span>
            </div>

            <div className="cta-status-pill">
              <span className="pulse-green-dot"></span>
              <span>OPEN TO WORK</span>
            </div>

            <span className="cta-tech-subtitle">FULL STACK (MERN)</span>
          </div>

          {/* Red angular cut corner */}
          <div className="cta-term-corner-accent" aria-hidden="true"></div>
        </div>
      </div>

      {/* Middle Text & Action */}
      <div className="manga-cta-center">
        <div className="manga-cta-bubble">
          <span className="comic-note">Have a Project in Mind?</span>
          <span className="hand-drawn-line" style={{ maxWidth: '180px', margin: '4px auto 0 auto' }}></span>
        </div>

        <p className="manga-cta-desc">
          Let's turn your ideas into <br className="hide-mobile" />
          <strong>something amazing together.</strong>
        </p>

        <Link to="/contact" className="btn-neo btn-neo-primary manga-cta-btn">
          <span>CONTACT ME</span>
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Right City Skyline Panel */}
      <div className="manga-cta-skyline-wrap">
        <div className="manga-cta-skyline-frame">
          <img 
            src={citySkylineImg} 
            alt="City Skyline Manga Panel" 
            className="manga-cta-skyline-img" 
          />
          <div className="skyline-speech-tag">
            <span className="comic-note" style={{ fontSize: '1.05rem', lineHeight: 1.2 }}>
              Build Something<br />Great Together!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
