import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  GraduationCap, 
  Code2, 
  Terminal, 
  Users 
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { projects } from '../data/projects';
import ChapterLabel from '../components/ChapterLabel';
import CornerStamps from '../components/CornerStamps';
import ProjectCard from '../components/ProjectCard';
import MangaBanner from '../components/MangaBanner';
import hariomMangaCustomHero from '../assets/images/hariom-manga-custom-hero-2x.png';
import { animateHero, animateSection } from '../animations/animations';

export default function Home() {
  const heroRef = useRef(null);
  const chapterRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonsRef = useRef(null);
  const mangaPanelRef = useRef(null);
  const speechBubbleRef = useRef(null);
  const statsStripRef = useRef(null);
  const creationsRef = useRef(null);

  useEffect(() => {
    const cleanupHero = animateHero(heroRef, {
      chapter: chapterRef.current,
      headingLines: headingRef.current?.children,
      subtext: subtextRef.current,
      buttons: buttonsRef.current?.children,
      mangaPanel: mangaPanelRef.current,
      speechBubble: speechBubbleRef.current,
      statsStrip: statsStripRef.current
    });

    const cleanupCreations = animateSection(creationsRef);

    return () => {
      if (cleanupHero) cleanupHero();
      if (cleanupCreations) cleanupCreations();
    };
  }, []);

  return (
    <div className="page-wrapper home-page" ref={heroRef}>
      <CornerStamps positions={['top-left', 'bottom-right']} />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content Column */}
            <div className="hero-content">
              {/* Chapter Badge */}
              <div ref={chapterRef}>
                <ChapterLabel chapter="CHAPTER 01" title="INTRODUCTION" />
                <div className="hero-sub-badge">
                  <span>{personalInfo.heroBadge}</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="hero-title-box" ref={headingRef}>
                <h1 className="hero-title-line">HI, I'M</h1>
                <h1 className="hero-title-line">
                  {personalInfo.firstName} <span className="text-red">{personalInfo.lastName}.</span>
                </h1>
              </div>

              {/* Subtitle & Introduction */}
              <div ref={subtextRef} className="hero-text-block">
                <p className="hero-role-title">{personalInfo.heroSubtitle}</p>
                <p className="hero-description">{personalInfo.shortIntroduction}</p>
              </div>

              {/* Two CTA Buttons */}
              <div className="hero-cta-buttons" ref={buttonsRef}>
                <Link to="/projects" className="btn-neo btn-neo-primary hero-btn">
                  <span>EXPLORE MY WORK</span>
                  <ArrowRight size={18} />
                </Link>

                <a 
                  href={personalInfo.resumeUrl} 
                  download="Hariom_Modi_Resume.pdf"
                  className="btn-neo btn-neo-secondary hero-btn"
                  title="Download Hariom Modi Resume"
                >
                  <Download size={18} />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>

              {/* Social Links Row */}
              <div className="hero-social-links-row">
                <span className="social-row-label">FIND ME ON:</span>
                <a 
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-neo btn-neo-secondary btn-neo-sm social-icon-btn"
                  title="GitHub Profile"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-neo btn-neo-secondary btn-neo-sm social-icon-btn"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={personalInfo.socials.email}
                  className="btn-neo btn-neo-secondary btn-neo-sm social-icon-btn"
                  title="Send Email"
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Right Photo Column in Comic Frame */}
            <div className="hero-visual-col">
              {/* Handwritten comic doodle above panel */}
              <div className="hero-comic-doodle">
                <span className="comic-note">Code. Create. Innovate.</span>
                <span className="hand-drawn-line"></span>
              </div>

              {/* Stylish Comic-Panel Frame for Photograph */}
              <div className="hero-photo-wrapper" ref={mangaPanelRef}>
                {/* Red Neo-brutalist offset backing layer */}
                <div className="hero-photo-backdrop" aria-hidden="true"></div>

                {/* Main Comic Framed Panel */}
                <div className="hero-photo-panel manga-panel">
                  {/* Top Comic Tag */}
                  <div className="photo-panel-tag">
                    <span>DEV // HARIOM MODI</span>
                  </div>

                  {/* Real Photograph styled with Manga Neo-Brutalist Frame */}
                  <img 
                    src={hariomMangaCustomHero} 
                    alt="Hariom Modi — Software Engineer" 
                    className="hero-real-photo"
                  />

                  {/* Corner Comic Accent */}
                  <div className="photo-corner-accent" aria-hidden="true"></div>
                </div>

                {/* Comic Speech Bubble */}
                <div className="hero-speech-bubble speech-bubble" ref={speechBubbleRef}>
                  <span>"{personalInfo.mangaQuote}"</span>
                </div>
              </div>
            </div>
          </div>

          {/* Verified Professional Information Strip */}
          <div className="stats-strip" ref={statsStripRef}>
            <div className="stat-item">
              <div className="stat-icon-wrap">
                <GraduationCap size={24} className="text-red" />
              </div>
              <div>
                <div className="stat-value">B.Tech CSE</div>
                <div className="stat-label">Graduating 2027</div>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <Code2 size={24} className="text-red" />
              </div>
              <div>
                <div className="stat-value">MERN Stack</div>
                <div className="stat-label">Full Stack Developer</div>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <Terminal size={24} className="text-red" />
              </div>
              <div>
                <div className="stat-value">60+ Problems</div>
                <div className="stat-label">LeetCode Solved</div>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon-wrap">
                <Users size={24} className="text-red" />
              </div>
              <div>
                <div className="stat-value">GDG Member</div>
                <div className="stat-label">Google Developer Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK PREVIEW SECTION */}
      <section className="section creations-section" ref={creationsRef}>
        <div className="container">
          <div className="creations-header-row reveal-on-scroll">
            <div>
              <ChapterLabel chapter="CHAPTER 02" title="FEATURED CREATIONS" />
              <h2 className="section-title">
                FLAGSHIP <span className="text-red">PROJECTS.</span>
              </h2>
              <p className="section-subtitle">
                Production-ready full-stack applications engineered with the MERN stack, RESTful APIs, and modern architecture.
              </p>
            </div>

            <div className="creations-more-link">
              <Link to="/projects" className="comic-note red hover-lift">
                View All Projects →
              </Link>
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="home-projects-grid reveal-on-scroll">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Bottom Call to Action Manga Banner */}
          <div className="reveal-on-scroll">
            <MangaBanner />
          </div>
        </div>
      </section>
    </div>
  );
}
