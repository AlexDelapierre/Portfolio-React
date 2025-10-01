import React, { useEffect, useState } from "react";
import "./Card.css";
import BandeauMobile from "../../assets/img/Bandeau_mobile.PNG";

function ProjectCard({ 
  imageMobile, 
  imageDesktop,
  title, 
  description, 
  tags, 
  liveLink, 
  codeLink 
}) {
  const [image, setImage] = useState(imageDesktop);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Détection du viewport
  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setImage(imageMobile);
        setIsMobile(true);
      } else {
        setImage(imageDesktop);
        setIsMobile(false);
      }
    };

    updateImage(); // au montage
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [imageMobile, imageDesktop]);

  return (
    <div className="card">
      
      <div className="card-image-container">
        {/* Bandeau mobile - affiché uniquement sur mobile */}
        {isMobile && (
          <img
            className="card-mobile-banner"
            src={BandeauMobile}
            alt="Bandeau mobile"
          />
        )}

        {/* Image du projet */}  
        <img
          className="card-image"
          src={image}
          alt="Aperçu du projet"
        />
      </div>

      <div className="card-content"> 
        {/* Titre */}
        <h4 className="card-title primary-color">{title}</h4>

        {/* Description */}
        <p className="card-description">{description}</p>

        {/* Technologies */}  
        <div v className="card-skills-container">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="card-skills-button"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Boutons Voir et Code */}
        <div className="card-buttons-container">   
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn card-btn btn-primary"
          >
            Voir
          </a>
          <a 
            href={codeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn card-btn btn-secondary"
          >
            Code
          </a>
        </div>
      </div>     
    </div>
  );
}

export default ProjectCard;
