import "./Skills.css";
import SkillCard from "./SkillsCard/SkillsCard";
import {FaLaptopCode, FaReact, FaDatabase, FaMobileAlt, FaHtml5, FaPalette, FaTools } from "react-icons/fa";

function Skills() {

  const skillsData = [
    {
      icon: FaLaptopCode,
      title: "Frontend",
      tags: ["JavaScript", "ReactJS", "Twig", "Responsive Design", "Mobile First"],
      backgroundColor: "#213f7a",
      color: "#50a2ff"
    },
    {
      icon: FaDatabase,
      title: "Backend",
      tags: ["TypeScript", "NodeJS", "Express", "PHP", "Symfony", "SQL", "MongoDB", "Doctrine", "API REST"],
      backgroundColor: "#184e56",
      color: "#05df72"
    },
    {
      icon: FaPalette,
      title: "Intégration Web",
      tags: ["HTML", "CSS", "Bootstrap"],
      backgroundColor: "#484946",
      color: "#fdc700"
      // backgroundColor: "#3b347a",
      // color: "#c27aff"
    },
    {
      icon: FaTools,
      title: "Outils",
      tags: ["Git/GitHub", "VS Code", "Vite", "Postman", "AdobeXD", "Figma"],
      backgroundColor: "#4a2f51",
      color: "#ff6467"
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Mes <span className='primary-color'>Compétences</span></h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            tags={skill.tags}
            backgroundColor={skill.backgroundColor}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;