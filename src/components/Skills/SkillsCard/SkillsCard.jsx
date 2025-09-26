import React from "react";
import "./SkillsCard.css";

function SkillsCard({ icon: Icon, title, tags, backgroundColor, color }) {
  return (
    <div className="skillsCard-container">
      {/* Partie icône + titre */}
      <div className="skillsCard-header">
        {Icon && (
        <span
          className="skillsCard-icon-bg"
          style={{ backgroundColor: backgroundColor }}
        >
          <Icon className="skillsCard-icon" style={{ color: color }}/>
        </span>
        )}        
        <h4 className="skillsCard-title">{title}</h4>
      </div>

      {/* Boutons (tags) */}
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
    </div>
  );
}

export default SkillsCard;
