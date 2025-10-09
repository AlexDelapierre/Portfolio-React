import React from "react";
import RevealSection from "../RevealSection/RevealSection";
import "./Hero.css";
import PhotoIdentite from "../../assets/img/Photo_identite.jpg";
import Socials from "../Socials/Socials";
import ScrollArrow from "../ScrollArrow/ScrollArrow";
// import { FaAngleDown } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="home-hero">
      <RevealSection>
        <div className="home-hero__content">

          <div className="home-hero__portrait">
            <img
              className="portrait"
              src={PhotoIdentite}
              alt="Alexandre DELAPIERRE"
            />
          </div>

          <h1>
            ALEXANDRE <span className="primary-color">DELAPIERRE</span>
          </h1>
          <h2 className="home-hero__title">
            Développeur <span className="primary-color">Web Fullstack</span>
          </h2>

          <div className="home-hero__info">
            <p className="home-hero__info-text">
              Développeur Web Full-Stack, je conçois des applications web modernes, rapides et fiables pour donner vie à vos projets.
            </p>
          </div>

          <div className="home-hero__btns">   
            <a href="./#projects" className="btn btn-Hero btn-primary btn-primary:hover">Mes projets</a>
            <a href="./#contact" className="btn btn-Hero btn-secondary btn-secondary:hover">Me contacter</a>
          </div>

          <Socials/>
          
          <div className="App">
            <ScrollArrow />
          </div>

        </div>
      </RevealSection>
    </section>
  );
}

export default Hero;
