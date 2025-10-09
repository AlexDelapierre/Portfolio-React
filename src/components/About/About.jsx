import RevealSection from "../RevealSection/RevealSection";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <RevealSection>
        <div className="about__content">
          <h2>A propos <span className='primary-color'>de moi</span></h2>
          <p>
            Développeur web full-stack junior passionné, <span className="primary-color">certifié RNCP niveau 5 - Développeur web et web mobile (Bac+2)</span>, je pratique la programmation depuis plus de 3 ans avec une implication constante. 
          </p>
          <p>
            À travers mes projets personnels, j’ai appris à relever des défis techniques, améliorer ma capacité à résoudre des problèmes, et concevoir des solutions efficaces et adaptées aux utilisateurs.
            Mon approche combine <span className="primary-color">autonomie, rigueur technique et capacité d'adaptation</span> - des qualités forgées par 3 années d'apprentissage continu.
          </p>
          <p>
            Disponible pour une nouvelle opportunité (emploi, alternance ou stage), je recherche des projets stimulants où mettre à profit mes compétences et ma soif d'apprendre de nouvelles technologies.
          </p>
        </div>
        <div className="about__btns">
          <a 
            href="https://cv.alexdelapierre.fr/"
            target="_blank" 
            rel="noopener noreferrer"  
            className="btn btn-cv btn-primary btn-primary:hover">Mon CV Web</a>
          <a
            href="/cv/CV_DELAPIERRE_Alexandre_Developpeur_web_Full-Stack.pdf"
            download
            className="btn btn-cv btn-secondary btn-secondary:hover"
          >
            Mon CV PDF
          </a>
        </div>
      </RevealSection>
    </section>
  );
}

export default About;
