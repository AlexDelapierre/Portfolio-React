import "./Projects.css";
import Card from "../Card/Card";
import projectsData from "../../data/projectsData";

// Exemple d'icônes pour les projets (optionnel)
// import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Mes <span className='primary-color'>Projets</span></h2>
      <div className="projectCards-grid">
        {projectsData.map((project, index) => (
          <Card
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
