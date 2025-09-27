import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectsData from "../../data/projectsData";

// Exemple d'icônes pour les projets (optionnel)
// import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Mes <span className='primary-color'>Projets</span></h2>
      <div className="projectCards-wrapper">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            imageMobile={project.imageMobile}
            imageDesktop={project.imageDesktop}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
