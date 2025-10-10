import RevealSection from "../RevealSection/RevealSection";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Détection du viewport
  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 1024) {
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
      <RevealSection
        staggerChildren={0.6}
        hidden={{ opacity: 0, y: 0 }} // Animation sans décalage vertical
      >
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
          <div className="card-text-and-tags"> 
            <h4 className="card-title primary-color">{title}</h4>
            <p className="card-text">{description}</p>

            <div className="card-skills-container">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="card-skills-tags"
                >
                  {tag}
                </span>
              ))} 
            </div>
          </div>

            {/* Boutons Voir et Code */}
          <div className="card-buttons-container">   
            <a 
              href={liveLink} 
              target={liveLink === "#" ? "_self" : "_blank"} // si lien inactif, reste sur la page
              rel={liveLink === "#" ? undefined : "noopener noreferrer"}
              className={`btn card-btn btn-primary ${liveLink === "#" ? "inactive-link" : ""}`}
            >
              Voir
            </a>
            <a
              href={codeLink}
              target={codeLink === "#" ? "_self" : "_blank"} // ne s'ouvre pas dans un nouvel onglet si inactif
              rel={codeLink === "#" ? undefined : "noopener noreferrer"}
              className={`btn card-btn btn-secondary ${codeLink === "#" ? "inactive-link" : ""}`}
            >
              Code
            </a>
          </div>

        </div>
     </RevealSection> 
    </div>
  );
}

export default ProjectCard;
