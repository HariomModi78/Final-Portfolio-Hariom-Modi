import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Globe, Layers, Server, ExternalLink, Github, CheckCircle2, Terminal } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import ChapterLabel from '../components/ChapterLabel';
import CornerStamps from '../components/CornerStamps';
import MangaBanner from '../components/MangaBanner';
import projDeskImg from '../assets/images/projects-desk-illustration.png';
import { animateCards, animateSection } from '../animations/animations';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const containerRef = useRef(null);
  const cardsGridRef = useRef(null);

  useEffect(() => {
    const cleanup = animateSection(containerRef);
    const cleanupCards = animateCards(cardsGridRef);
    return () => {
      if (cleanup) cleanup();
      if (cleanupCards) cleanupCards();
    };
  }, [activeCategory]);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory));

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'sparkles': return <Sparkles size={16} />;
      case 'globe': return <Globe size={16} />;
      case 'layers': return <Layers size={16} />;
      case 'server': return <Server size={16} />;
      default: return <Sparkles size={16} />;
    }
  };

  return (
    <div className="page-wrapper projects-page" ref={containerRef}>
      <CornerStamps positions={['top-left', 'bottom-right']} />

      <section className="section projects-header-section">
        <div className="container">
          {/* Header Layout */}
          <div className="projects-header-grid">
            <div className="projects-header-info">
              <ChapterLabel chapter="CHAPTER 03" title="SELECTED WORK" />
              <h1 className="section-title">
                THINGS I'VE <span className="text-red">BUILT.</span>
              </h1>
              <p className="projects-lead-desc">
                Production-deployed full-stack web applications engineered with verified architecture, RESTful APIs, and responsive design.
              </p>
            </div>

            {/* Right Manga Laptop & Mug Illustration */}
            <div className="projects-desk-visual">
              <div className="projects-doodle-text">
                <span className="comic-note">Real Projects →</span>
                <span className="hand-drawn-line" style={{ maxWidth: '140px' }}></span>
              </div>
              <div className="projects-desk-panel manga-panel">
                <img 
                  src={projDeskImg} 
                  alt="Manga Laptop and Coffee Mug" 
                  className="projects-desk-img" 
                />
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="projects-filter-bar">
            {projectCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`btn-filter ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="filter-icon">{getCategoryIcon(cat.icon)}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Project Showcase */}
          <div className="featured-project-showcase" ref={cardsGridRef}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="featured-showcase-card comic-card">
                {/* Header row */}
                <div className="showcase-header">
                  <div className="showcase-title-group">
                    <span className="project-featured-badge">
                      {project.featuredLabel}
                    </span>
                    <h2 className="showcase-project-name">{project.title}</h2>
                    <h3 className="showcase-brand-name">BRAND: <span className="text-red">{project.brandName}</span></h3>
                    <p className="showcase-subtitle">{project.subtitle}</p>
                  </div>

                  <div className="showcase-actions-top">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-neo btn-neo-primary"
                        title="View Live Deployed Project"
                      >
                        <ExternalLink size={18} />
                        <span>VIEW LIVE PROJECT</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-neo btn-neo-secondary"
                        title="View GitHub Repository"
                      >
                        <Github size={18} />
                        <span>GITHUB REPOSITORY</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Banner / Media */}
                <div className="showcase-media-box">
                  <img 
                    src={project.image} 
                    alt={`${project.title} Preview`} 
                    className="showcase-img"
                  />
                  <div className="showcase-live-pill">
                    <span className="live-indicator-dot"></span>
                    <span>LIVE ON RENDER: {project.liveUrl}</span>
                  </div>
                </div>

                {/* Overview & Tech Tags */}
                <div className="showcase-body">
                  <div className="showcase-desc-block">
                    <h4 className="body-heading">Project Overview:</h4>
                    <p className="showcase-desc-text">{project.fullDescription}</p>
                  </div>

                  <div className="showcase-tags-block">
                    <h4 className="body-heading">Technology Stack:</h4>
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag-pill active">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Two column breakdown: Features & Contributions */}
                  <div className="showcase-details-split">
                    {/* Key Features */}
                    <div className="showcase-detail-col">
                      <h4 className="split-col-heading">
                        <Terminal size={18} className="text-red" />
                        <span>Core Application Features</span>
                      </h4>
                      <ul className="split-detail-list">
                        {project.features.map((feat, idx) => (
                          <li key={idx} className="split-list-item">
                            <CheckCircle2 size={16} className="text-red" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Developer Contributions */}
                    <div className="showcase-detail-col">
                      <h4 className="split-col-heading">
                        <CheckCircle2 size={18} className="text-red" />
                        <span>My Verified Contributions</span>
                      </h4>
                      <ul className="split-detail-list">
                        {project.myContributions.map((contrib, idx) => (
                          <li key={idx} className="split-list-item">
                            <span className="contrib-marker">★</span>
                            <span>{contrib}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extendable Note */}
          <div className="projects-extendable-notice comic-card">
            <span className="chapter-badge" style={{ transform: 'none', marginBottom: '8px' }}>
              SOURCE OF TRUTH NOTICE
            </span>
            <p className="extendable-text">
              <strong>Verified Portfolio Policy:</strong> Only genuine, deployed applications built by Hariom Modi are listed. More verified full-stack applications will be added as they reach deployment stage.
            </p>
          </div>

          {/* Bottom Manga CTA Banner */}
          <MangaBanner />
        </div>
      </section>
    </div>
  );
}
