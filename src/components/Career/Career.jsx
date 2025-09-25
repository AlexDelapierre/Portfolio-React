import React from "react";
import "./Career.css";

function Career() {
	return (
		<section className="career" id="career">
			<h2 className="career__title">Mon <span className='text-secondary-color'>parcours</span></h2>
			<div className="career__content">
				<p>
					Monteur-câbleur - Euroconcep (intérim) 11/2023  01/2025 <br />
					Lecture de schémas techniques, assemblage et câblage d’armoires électriques industrielles. Expérience développant rigueur, gestion du temps, sens du détail et travail en équipe.
				</p>
				<p>
					Professeur de guitare - Écoles de musique 2012  2021 <br />
					Enseignement de la guitare dans plusieurs écoles (OCA, Mélodia, Les Amis de la Musique) et à domicile. Expérience renforçant pédagogie, écoute, patience et sens de l’organisation.
      	</p>			
			</div>
		</section>
	);
}

export default Career;
