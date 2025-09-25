import React from "react";
import "./ProjectCard.css";

function ProjectCard({ 
  image, 
  title, 
  description, 
  tags, 
  backgroundColor, 
  color, 
  liveLink, 
  codeLink 
  }) {
  return (
    <div className="projectCard-container">
      {/* Image du projet */}
      {image && (
        <div
          className="projectCard-image"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Titre */}
      <h4 className="projectCard-title">{title}</h4>

      {/* Description */}
      {description && <p className="projectCard-description">{description}</p>}

      {/* Technologies */}
      <div className="projectCard-tags-container">
        {tags.map((tag, index) => (
          <button
            key={index}
            className="projectCard-tag"
            style={{ backgroundColor: backgroundColor, color: color }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Boutons Voir et Code */}
      <div className="projectCard-buttons">   
        <a href="./#projects" className="btn btn-projectCard btn-primary btn-primary:hover">Voir</a>
        <a href="./#contact" className="btn btn-projectCard btn-secondary btn-secondary:hover">Code</a>
      </div>  

    </div>
  );
}

export default ProjectCard;
