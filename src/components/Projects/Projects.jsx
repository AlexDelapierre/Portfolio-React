import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import restaurantImg from "../../assets/img/Restaurant.jpeg";

// Exemple d'icônes pour les projets (optionnel, ou tu peux mettre des images)
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Projects() {

  const projectsData = [
    {
      image: restaurantImg, // chemin de ton image
      title: "Portfolio",
      description: "Mon portfolio personnel réalisé en React, responsive et moderne.",
      tags: ["ReactJS", "CSS", "Figma"],
      backgroundColor: "#213f7a",
      color: "#50a2ff",
      liveLink: "https://le-quai-antique.alexdelapierre.fr/",
      codeLink: "https://github.com/AlexDelapierre/Le-Quai-Antique"
    },
    {
      image: "/images/project2.png",
      title: "API NodeJS",
      description: "API RESTful développée avec NodeJS et Express, sécurisée et optimisée.",
      tags: ["NodeJS", "Express", "MongoDB", "JWT"],
      backgroundColor: "#184e56",
      color: "#05df72",
      liveLink: "#",
      codeLink: "#"
    },
    {
      image: "/images/project3.png",
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
            image={project.image}
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
