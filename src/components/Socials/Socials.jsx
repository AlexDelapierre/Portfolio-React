import React from "react";
import "./Socials.css";
import LinkedinIcon from "../../assets/icons/Linkedin-white.svg";
import GithubIcon from "../../assets/icons/github-white-60.svg";
import CVIcon from "../../assets/icons/CV-white-48.png";

function Socials() {
	return (
		<div className="socials-container">
      <div className="social">
        <a
          href="https://www.linkedin.com/in/alexandre-delapierre/"
          className="social-icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={LinkedinIcon}
            alt="Alexandre Delapierre Linkedin Profile"
            className="social-icon"
          />
        </a>
      </div>

      <div className="social">
        <a
          href="https://github.com/AlexDelapierre"
          className="social-icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={GithubIcon}
            alt="Alexandre Delapierre Github Profile"
            className="social-icon"
          />
        </a>
      </div>

      <div className="social">
        <a
          href="https://cv.alexdelapierre.fr/"
          className="social-icon-link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={CVIcon}
            alt="Alexandre Delapierre CV inline"
            className="social-icon"
          />
        </a>
      </div>
    </div>
	);
}

export default Socials;
