import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import RestaurantMobile from "../../assets/img/Restaurant_mobile.PNG";
import RestaurantDesktop from "../../assets/img/Restaurant_desktop.PNG";
import RecettesMobile from "../../assets/img/Recettes_mobile.PNG";
import RecettesDesktop from "../../assets/img/Recettes_desktop.PNG";
import SymfonyShopMobile from "../../assets/img/SymfonyShop_mobile.PNG";
import SymfonyShopDesktop from "../../assets/img/SymfonyShop_desktop.PNG";
import BookeoShopMobile from "../../assets/img/Bookeo_mobile.PNG";
import BookeoShopDesktop from "../../assets/img/Bookeo_desktop.PNG";

// Exemple d'icônes pour les projets (optionnel)
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Projects() {

  const projectsData = [
    {
      imageMobile: RestaurantMobile, 
      imageDesktop: RestaurantDesktop,
      title: "Portfolio",
      description: "Mon portfolio personnel réalisé en React, responsive et moderne.",
      tags: ["ReactJS", "CSS", "Figma"],
      backgroundColor: "#213f7a",
      color: "#50a2ff",
      liveLink: "https://le-quai-antique.alexdelapierre.fr/",
      codeLink: "https://github.com/AlexDelapierre/Le-Quai-Antique"
    },
    {
      imageMobile: RecettesMobile,
      imageDesktop: RecettesDesktop,
      title: "API NodeJS",
      description: "API RESTful développée avec NodeJS et Express, sécurisée et optimisée.",
      tags: ["NodeJS", "Express", "MongoDB", "JWT"],
      backgroundColor: "#184e56",
      color: "#05df72",
      liveLink: "#",
      codeLink: "#"
    },
    {
      imageMobile: SymfonyShopMobile,
      imageDesktop: SymfonyShopDesktop,
      title: "E-commerce",
      description: "Site e-commerce responsive développé avec HTML, CSS et JS.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backgroundColor: "#3b347a",
      color: "#c27aff",
      liveLink: "#",
      codeLink: "#"
    },
    {
      imageMobile: BookeoShopMobile,
      imageDesktop: BookeoShopDesktop,
      title: "E-commerce",
      description: "Site e-commerce responsive développé avec HTML, CSS et JS.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backgroundColor: "#3b347a",
      color: "#c27aff",
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Mes <span className='text-secondary-color'>Projets</span></h2>
      <div className="projectCards-wrapper">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            imageMobile={project.imageMobile}
            imageDesktop={project.imageDesktop}
            title={project.title}
            description={project.description}
            tags={project.tags}
            backgroundColor={project.backgroundColor}
            color={project.color}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
