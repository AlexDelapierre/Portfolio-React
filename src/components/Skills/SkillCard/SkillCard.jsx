import React from "react";
import "./Skills.css";

function SkillCard({ icon: Icon, title, tags }) {
  return (
    <div className="skill-card">
      {/* Partie icône + titre */}
      <div className="skill-card-header">
        {Icon && <Icon className="skill-icon" />}
        <h4 className="skill-title">{title}</h4>
      </div>

      {/* Boutons (tags) */}
      <div className="skill-card-buttons">
        {tags.map((tag, index) => (
          <button key={index} className="skill-btn">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
