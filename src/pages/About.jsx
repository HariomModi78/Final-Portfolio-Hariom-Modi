import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  GraduationCap 
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { educationList } from '../data/education';
import ChapterLabel from '../components/ChapterLabel';
import CornerStamps from '../components/CornerStamps';
import MangaBanner from '../components/MangaBanner';
import hariomMangaCustomHero from '../assets/images/hariom-manga-custom-hero-2x.png';
import mangaWorkspaceImg from '../assets/images/manga-workspace.png';
import { animateSection } from '../animations/animations';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = animateSection(containerRef);
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  const btechEducation = educationList[0];

  return (
    <div className="page-wrapper about-page" ref={containerRef}>
      <CornerStamps positions={['top-left', 'bottom-right']} />

      <section className="section about-hero-section">
        <div className="container">
          {/* Chapter Label */}
          <ChapterLabel chapter="CHAPTER 02" title="WHO AM I?" />

          {/* Top Section Layout */}
          <div className="about-top-grid">
            {/* Left Column: Heading & Core Objective */}
            <div className="about-left-col">
              <div className="about-heading-box">
                <h1 className="about-main-title">
                  BEHIND THE <br />
                  <span className="text-red">CODE.</span>
                </h1>
              </div>

              <p className="about-strapline">
                SOFTWARE ENGINEER & COMPUTER SCIENCE ENGINEERING STUDENT DRIVEN BY PRACTICAL PROBLEM SOLVING.
              </p>

              {/* Verified Professional Objective Box */}
              <div className="about-objective-card comic-card">
                <span className="objective-label">PROFESSIONAL OBJECTIVE</span>
                <p className="objective-text">
                  "{personalInfo.objective}"
                </p>
              </div>

              {/* Hand-drawn comic annotation */}
              <div className="about-arrow-doodle">
                <span className="comic-note">Building with Purpose</span>
                <span className="doodle-curve-arrow">↳</span>
              </div>
            </div>

            {/* Middle Column: Manga Character Portrait Panel */}
            <div className="about-center-col">
              <div className="about-portrait-panel manga-panel">
                <img 
                  src={hariomMangaCustomHero} 
                  alt="Hariom Modi — Software Engineer" 
                  className="about-portrait-img" 
                />
                <div className="portrait-speech-tag speech-bubble">
                  <span>"{personalInfo.mangaQuote}"</span>
                </div>
              </div>
            </div>

            {/* Right Column: Bio Paragraph & Education Summary */}
            <div className="about-right-col">
              <div className="about-bio-card">
                <h3 className="bio-card-title">My Introduction</h3>
                <p className="about-bio-text">
                  {personalInfo.aboutParagraph}
                </p>
              </div>

              {/* Education Summary Card */}
              <div className="about-edu-summary-card comic-card">
                <div className="edu-summary-header">
                  <GraduationCap size={20} className="text-red" />
                  <span className="edu-summary-badge">ACADEMIC PROFILE</span>
                </div>
                <h4 className="edu-summary-inst">{btechEducation.institution}</h4>
                <p className="edu-summary-deg">{btechEducation.degree} — {btechEducation.branch}</p>
                <div className="edu-summary-meta">
                  <span className="edu-meta-tag">Duration: {btechEducation.duration}</span>
                  <span className="edu-meta-tag highlight">CGPA: {btechEducation.score}</span>
                </div>
                <Link to="/education" className="edu-more-link">
                  View Full Academic Timeline →
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Sections: Interests & Approach */}
          <div className="about-detailed-grid">
            {/* 1. Development Interests */}
            <div className="comic-card detailed-info-card reveal-on-scroll">
              <div className="card-header-with-badge">
                <span className="chapter-badge" style={{ transform: 'none', marginBottom: 0 }}>
                  INTERESTS
                </span>
                <h3 className="detailed-card-title">My Development Interests</h3>
              </div>
              <ul className="detailed-list">
                {personalInfo.developmentInterests.map((interest, idx) => (
                  <li key={idx} className="detailed-list-item">
                    <CheckCircle2 size={18} className="text-red" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Approach to Problem Solving */}
            <div className="comic-card detailed-info-card reveal-on-scroll">
              <div className="card-header-with-badge">
                <span className="chapter-badge" style={{ transform: 'none', marginBottom: 0 }}>
                  METHODOLOGY
                </span>
                <h3 className="detailed-card-title">Approach to Problem Solving</h3>
              </div>
              <ul className="detailed-list">
                {personalInfo.problemSolvingApproach.map((approach, idx) => (
                  <li key={idx} className="detailed-list-item">
                    <CheckCircle2 size={18} className="text-red" />
                    <span>{approach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Manga Workspace Illustration Panel */}
            <div className="about-workspace-panel manga-panel reveal-on-scroll">
              <img 
                src={mangaWorkspaceImg} 
                alt="Developer Coding Setup Manga Illustration" 
                className="about-workspace-img" 
              />
              <div className="workspace-tag-bubble">
                <span className="comic-note" style={{ fontSize: '1.05rem' }}>
                  Code Today... Create Tomorrow...
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <MangaBanner />
        </div>
      </section>
    </div>
  );
}
