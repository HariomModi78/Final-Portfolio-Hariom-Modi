import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  ArrowRight,
  Database,
  Globe
} from 'lucide-react';
import { projects } from '../data/projects';
import ChapterLabel from '../components/ChapterLabel';
import CornerStamps from '../components/CornerStamps';
import MangaBanner from '../components/MangaBanner';
import { animateSection } from '../animations/animations';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const cleanup = animateSection(containerRef);
    return () => {
      if (cleanup) cleanup();
    };
  }, [projectId]);

  // Find project by ID (case-insensitive)
  const project = projects.find(
    (p) => p.id.toLowerCase() === (projectId || '').toLowerCase()
  );

  // If not found, show friendly fallback
  if (!project) {
    return (
      <div className="page-wrapper project-detail-page">
        <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
          <ChapterLabel chapter="404" title="PROJECT NOT FOUND" />
          <h1 className="section-title" style={{ marginTop: '20px' }}>
            PROJECT <span className="text-red">NOT FOUND.</span>
          </h1>
          <p style={{ margin: '16px 0 32px', color: '#555' }}>
            The project you're looking for doesn't exist or has moved.
          </p>
          <Link to="/projects" className="btn-neo btn-neo-primary">
            <ArrowLeft size={18} />
            <span>BACK TO ALL PROJECTS</span>
          </Link>
        </div>
      </div>
    );
  }

  // Find next project for bottom navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="page-wrapper project-detail-page" ref={containerRef}>
      <CornerStamps positions={['top-left', 'bottom-right']} />

      <section className="section project-detail-hero">
        <div className="container">
          {/* Back Button */}
          <div className="detail-top-nav">
            <button 
              onClick={() => navigate('/projects')} 
              className="btn-neo btn-neo-secondary btn-back"
              title="Return to Projects list"
            >
              <ArrowLeft size={18} />
              <span>ALL PROJECTS</span>
            </button>
            <div className="detail-breadcrumb">
              <span>PROJECTS</span>
              <span className="crumb-slash">/</span>
              <span className="crumb-active">{project.brandName}</span>
            </div>
          </div>

          {/* Header info */}
          <div className="detail-header-card comic-card">
            <div className="detail-header-left">
              <div className="detail-badges-row">
                <span className="project-featured-badge">
                  {project.featuredLabel || 'FEATURED WORK ★'}
                </span>
                <span className="detail-brand-badge">
                  BRAND: <strong>{project.brandName}</strong>
                </span>
              </div>
              <h1 className="detail-title">{project.title}</h1>
              <p className="detail-subtitle">{project.subtitle}</p>
            </div>

            {/* Quick Action CTAs */}
            <div className="detail-actions">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-neo btn-neo-primary"
                  title="Open Live Web Application"
                >
                  <ExternalLink size={18} />
                  <span>VIEW LIVE DEMO</span>
                </a>
              )}
              {project.githubFrontend && (
                <a 
                  href={project.githubFrontend} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-neo btn-neo-secondary"
                  title="Frontend Source Code"
                >
                  <Github size={18} />
                  <span>FRONTEND REPO</span>
                </a>
              )}
              {project.githubBackend && (
                <a 
                  href={project.githubBackend} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-neo btn-neo-secondary"
                  title="Backend Source Code"
                >
                  <Github size={18} />
                  <span>BACKEND REPO</span>
                </a>
              )}
              {project.githubUrl && !project.githubFrontend && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-neo btn-neo-secondary"
                  title="GitHub Repository"
                >
                  <Github size={18} />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>
          </div>

          {/* Hero Showcase Image */}
          <div className="detail-image-panel manga-panel">
            <img 
              src={project.image} 
              alt={`${project.title} Screenshot Showcase`} 
              className="detail-hero-img"
            />
            {project.liveUrl && (
              <div className="detail-live-pill">
                <span className="live-indicator-dot"></span>
                <span>DEPLOYED & VERIFIED: {project.liveUrl}</span>
              </div>
            )}
          </div>

          {/* Deep-dive Content Grid */}
          <div className="detail-grid">
            {/* Left Column: Overview & Contributions */}
            <div className="detail-col-main">
              {/* Project Overview */}
              <div className="detail-content-card comic-card">
                <div className="card-header-tag">
                  <Terminal size={18} className="text-red" />
                  <h3>EXECUTIVE OVERVIEW</h3>
                </div>
                <p className="detail-text-lead">{project.shortDescription}</p>
                <p className="detail-text-body">{project.fullDescription}</p>
              </div>

              {/* Developer Contributions */}
              <div className="detail-content-card comic-card">
                <div className="card-header-tag">
                  <Cpu size={18} className="text-red" />
                  <h3>MY CONTRIBUTIONS & ENGINEERING</h3>
                </div>
                <ul className="contributions-list">
                  {project.myContributions.map((contrib, idx) => (
                    <li key={idx} className="contribution-item">
                      <span className="contrib-star">★</span>
                      <span>{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Features */}
              <div className="detail-content-card comic-card">
                <div className="card-header-tag">
                  <Zap size={18} className="text-red" />
                  <h3>CORE APPLICATION FEATURES</h3>
                </div>
                <div className="features-grid">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <CheckCircle2 size={16} className="text-red flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Tech Stack & System Highlights */}
            <div className="detail-col-sidebar">
              {/* Tech Stack Card */}
              <div className="detail-sidebar-card comic-card">
                <div className="card-header-tag">
                  <Layers size={18} className="text-red" />
                  <h3>TECHNOLOGY STACK</h3>
                </div>
                <div className="detail-tags-wrap">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill active">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights Card */}
              <div className="detail-sidebar-card comic-card">
                <div className="card-header-tag">
                  <ShieldCheck size={18} className="text-red" />
                  <h3>ARCHITECTURAL SPECS</h3>
                </div>
                <div className="spec-items">
                  <div className="spec-row">
                    <span className="spec-label">Architecture</span>
                    <span className="spec-val">
                      {project.id === 'fitcore' ? 'Multi-Tenant B2B SaaS' : 'Full-Stack MVC / REST'}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Security</span>
                    <span className="spec-val">
                      {project.id === 'fitcore' ? 'JWT, RBAC, Webhook HMAC' : 'Session & Express Security'}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Database</span>
                    <span className="spec-val">
                      {project.id === 'fitcore' ? 'MongoDB Aggregations + Indexes' : 'MongoDB Document Storage'}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Automation</span>
                    <span className="spec-val">
                      {project.id === 'fitcore' ? 'Nightly Scanner + WhatsApp API' : 'Automated Bracket Workflows'}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Hosting</span>
                    <span className="spec-val">Render Cloud Platform</span>
                  </div>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="detail-sidebar-card comic-card callout-card">
                <span className="chapter-badge" style={{ transform: 'none', marginBottom: '12px' }}>
                  SOURCE VERIFICATION
                </span>
                <p className="callout-text">
                  This project is deployed live and open for review. Explore the working deployment or inspect the GitHub repositories.
                </p>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-neo btn-neo-primary w-full"
                    style={{ marginTop: '12px', justifyContent: 'center' }}
                  >
                    <Globe size={18} />
                    <span>LAUNCH APPLICATION</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Next Project Footer Switcher */}
          {nextProject && nextProject.id !== project.id && (
            <div className="next-project-card comic-card">
              <div>
                <span className="chapter-badge" style={{ transform: 'none', marginBottom: '8px' }}>
                  NEXT CASE STUDY
                </span>
                <h3 className="next-title">{nextProject.title}</h3>
                <p className="next-desc">{nextProject.subtitle}</p>
              </div>
              <Link 
                to={`/projects/${nextProject.id}`} 
                className="btn-neo btn-neo-primary next-btn"
              >
                <span>EXPLORE PROJECT</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          )}

          {/* Manga Banner */}
          <MangaBanner />
        </div>
      </section>
    </div>
  );
}
