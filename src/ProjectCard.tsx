import React from 'react';
import { Globe, Github } from 'lucide-react';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  technologies: string[];
  websiteLink?: string;
  sourceLink?: string;
  sourceUiLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  technologies,
  websiteLink,
  sourceLink,
  sourceUiLink,
}) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={imageSrc} alt={title} className="project-image" />
      </div>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
              <Globe size={16} /> Website
            </a>
          )}
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
              <Github size={16} /> Source
            </a>
          )}
          {sourceUiLink && (
            <a href={sourceUiLink} target="_blank" rel="noopener noreferrer" className="project-link-button">
              <Github size={16} /> Source (UI)
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;