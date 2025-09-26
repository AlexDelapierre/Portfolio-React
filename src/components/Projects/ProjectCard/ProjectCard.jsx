import React, { useEffect, useState } from "react";
import "./ProjectCard.css";
import BandeauMobile from "../../../assets/img/Bandeau_mobile.PNG";

function ProjectCard({ 
  imageMobile, 
  imageDesktop,
  title, 
  description, 
  tags, 
  backgroundColor, 
  color, 
  liveLink, 
  codeLink 
}) {
  const [image, setImage] = useState(imageDesktop);
  const [bgPosition, setBgPosition] = useState("center center");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Détection du viewport
  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setImage(imageMobile);
        setBgPosition("center top"); 
        setIsMobile(true);
      } else {
        setImage(imageDesktop);
        setBgPosition("center center"); 
        setIsMobile(false);
      }
    };

    updateImage(); // au montage
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [imageMobile, imageDesktop]);

  return (
    <div className="projectCard-container">

      {/* Bandeau mobile - affiché uniquement sur mobile */}
      {isMobile && (
        <div 
          className="projectCard-mobile-banner"
          style={{
            backgroundImage: `url(${BandeauMobile})`,
            backgroundPosition: bgPosition,
            backgroundSize: "cover",
          }}
        />
      )}

      {/* Image du projet */}  
      <div
        className="projectCard-image"
        style={{backgroundImage: `url(${image})`,}}
      />

      <div className="projectCard-content"> 
        {/* Titre */}
        <h4 className="projectCard-title">{title}</h4>

        {/* Description */}
        {description && <p className="projectCard-description">{description}</p>}

        {/* Technologies */}
        <div className="btn-card-container">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn-card"
              style={{ backgroundColor: backgroundColor, color: color }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Boutons Voir et Code */}
        <div className="projectCard-buttons">   
          <a href={liveLink} className="btn btn-projectCard btn-primary btn-primary:hover">Voir</a>
          <a href={codeLink} className="btn btn-projectCard btn-secondary btn-secondary:hover">Code</a>
        </div>
      </div>     
    </div>
  );
}

export default ProjectCard;
