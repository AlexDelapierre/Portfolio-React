import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import { FaReact, FaPhp, FaDatabase } from "react-icons/fa";

function Skills() {

  const skillsData = [
    {
      icon: FaReact,
      title: "Frontend",
      tags: ["JavaScript", "ReactJS", "Twig"]
    },
    {
      icon: FaPhp,
      title: "Backend",
      tags: ["TypeScript", "NodeJS", "Express" ,"PHP", "Symfony", "SQL(MySQL, MariaDB)", "NoSQL(MongoDB, Mongoose)", "ORM Doctrine", "API REST"]
    },
    {
      icon: FaDatabase,
      title: "Mobile",
      tags: ["Responsive Design", "Mobile First"] 
    },
    {
      icon: FaDatabase,
      title: "Intégration Web",
      tags: ["HTML", "CSS", "Bootstrap"]
    },
    {
      icon: FaDatabase,
      title: "Outils",
      tags: ["Git/GitHub", "VS Code", "Vite", "Postman", "AdobeXD", "Figma"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Mes <span className='text-secondary-color'>Compétences</span></h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            tags={skill.tags}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;