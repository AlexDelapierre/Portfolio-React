import RevealSection from "../RevealSection/RevealSection";
import React from "react";
import "./Career.css";

function Career() {
	return (
		<section className="career" id="career">
			<RevealSection>
				<h2 className="career__title">Mon <span className='primary-color'>parcours</span></h2>
				<div className="career__content">
					<h3><span className="primary-color">Monteur-câbleur - </span>Euroconcep<span className="date">11/2023 - 01/2025</span></h3>
					<p>
						Lecture de schémas techniques, assemblage et câblage d’armoires électriques industrielles. Expérience développant rigueur, gestion du temps, sens du détail et travail en équipe.
					</p>
					<h3><span className="primary-color">Graduate Développeur web full stack - </span>Studi<span className="date">01/2022 - 10/2023</span></h3>
					<p>
						Formation avec l’école Studi de 1 an et 9 mois axée sur le développement front-end et back-end d’applications web, incluant le maquettage (Figma, AdobeXD), la création d’interfaces utilisateur dynamiques, la conceptualisation (UML, Merise) et l’intégration de bases de données relationnelles, le développement de composants d’accès aux données (requêtes SQL ou ORM), de composants métier côté serveur, et de plateformes d’administration.
					</p>
					<h3><span className="primary-color">Professeur de guitare - </span>OCA, Mélodia, Les Amis de la Musique<span className="date">2012 - 2021</span></h3>
					<p>
						Enseignement de la guitare dans plusieurs écoles ainsi qu'à domicile. Expérience renforçant pédagogie, écoute, patience et sens de l’organisation.
					</p>			
				</div>
			</RevealSection>
		</section>
	);
}

export default Career;
