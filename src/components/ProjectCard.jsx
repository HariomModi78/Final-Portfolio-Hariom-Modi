import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, X, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (e) => {
    // If clicking on an anchor tag, let it open
    if (e.target.closest('a')) return;
    setShowModal(true);
  };

  return (
    <>
      <div 
        className="project-comic-card"
        onClick={handleCardClick}
      >
        {/* Featured ribbon */}
        {project.featured && (
          <div className="project-featured-badge">
            FEATURED ★
          </div>
        )}

        {/* Thumbnail */}
        <div className="project-thumbnail-wrapper">
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-thumbnail"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="project-info">
          <div className="project-title-row">
            <h3 className="project-title">{project.title}</h3>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-icon"
              title="Open Project Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
            </a>
          </div>

          <p className="project-desc">{project.shortDescription}</p>

          {/* Tags */}
          <div className="project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="project-tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Red bottom accent slash */}
        <div className="project-bottom-accent"></div>
      </div>

      {/* Detail Modal */}
      {showModal && (
        <div className="project-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="project-modal-close" 
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="chapter-badge" style={{ transform: 'none', marginBottom: '8px' }}>
                PROJECT SPOTLIGHT
              </span>
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-subtitle">{project.subtitle}</p>
            </div>

            <div className="modal-image-wrap">
              <img src={project.image} alt={project.title} className="modal-image" />
            </div>

            <div className="modal-body">
              <p className="modal-description">{project.fullDescription}</p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="modal-highlights">
                  <h4 className="highlights-title">Key Architectural Highlights:</h4>
                  <ul>
                    {project.highlights.map((h, i) => (
                      <li key={i} className="highlight-item">
                        <CheckCircle2 size={16} className="text-red" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-tags">
                <span className="modal-tags-label">Tech Stack:</span>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag-pill active">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="modal-actions">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-neo btn-neo-primary"
                >
                  <ExternalLink size={18} />
                  <span>Live Preview</span>
                </a>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-neo btn-neo-secondary"
                  >
                    <Github size={18} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
