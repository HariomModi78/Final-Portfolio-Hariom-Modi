import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // If clicking on an anchor tag, let it open directly
    if (e.target.closest('a')) return;
    navigate(`/projects/${project.id}`);
  };

  return (
    <div 
      className="project-comic-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') navigate(`/projects/${project.id}`);
      }}
    >
      {/* Featured ribbon */}
      {project.featured && (
        <div className="project-featured-badge">
          {project.featuredLabel || 'FEATURED ★'}
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
            title="Open Live Demo"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <p className="project-desc">{project.shortDescription}</p>

        {/* Tags */}
        <div className="project-tags">
          {project.tags.slice(0, 5).map((tag, idx) => (
            <span key={idx} className="project-tag-pill">
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="project-tag-pill">+{project.tags.length - 5}</span>
          )}
        </div>

        <div className="project-card-footer">
          <span className="view-case-study-link">
            <span>Read Case Study</span>
            <ArrowRight size={15} />
          </span>
        </div>
      </div>

      {/* Red bottom accent slash */}
      <div className="project-bottom-accent"></div>
    </div>
  );
}
