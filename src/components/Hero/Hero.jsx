import React from "react";
import "./Hero.css";
import PhotoIdentite from "../../assets/img/Photo_identite.jpg";

function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">

        <div className="home-hero__portrait">
          <img
            className="portrait"
            src={PhotoIdentite}
            alt="Alexandre DELAPIERRE"
          />
        </div>

        <h1 className="home-hero__name">
          ALEXANDRE <span className="home-hero__name-last">DELAPIERRE</span>
        </h1>
        <h2 className="home-hero__title">
          Développeur <span className="home-hero__title-key">Web Fullstack</span>
        </h2>

        <div className="home-hero__info">
          <p className="home-hero__info-text">
            Développeur Web Full-Stack, je conçois des applications web modernes, rapides et fiables pour donner vie à vos projets.
          </p>
        </div>

        <div className="home-hero__btns">   
          <a href="./#projects" className="btn">Mes projets</a>
          <a href="./#contact" className="btn btn-secondary">Me contacter</a>
        </div>
        
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a
              href="https://www.linkedin.com/in/alexandre-delapierre/"
              className="home-hero__social-icon-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
                alt="Alexandre Delapierre Linkedin Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>

          <div className="home-hero__social">
            <a
              href="https://github.com/AlexDelapierre"
              className="home-hero__social-icon-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                alt="Alexandre Delapierre Github Profile"
                className="home-hero__social-icon"
              />
            </a>
          </div>

          <div className="home-hero__social">
            <a
              href="https://cv.alexdelapierre.fr/"
              className="home-hero__social-icon-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg"
                alt="Alexandre Delapierre CV inline"
                className="home-hero__social-icon"
              />
            </a>
          </div>
        </div>

        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
