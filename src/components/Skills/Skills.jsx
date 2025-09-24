import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import { FaReact, FaPhp, FaDatabase } from "react-icons/fa";

function Skills() {

  const skillsData = [
    {
      icon: FaReact,
      title: "React",
      tags: ["JSX", "Hooks", "Router", "State"]
    },
    {
      icon: FaPhp,
      title: "PHP",
      tags: ["Symfony", "Composer", "OOP", "Twig"]
    },
    {
      icon: FaDatabase,
      title: "SQL",
      tags: ["CRUD", "Joins", "Indexes", "Optimisation"]
    }
  ];

  return (
    <section id="skills" className="skills">
        <h2>Mes <span className='text-secondary-color'>Compétences</span></h2>
        <div className="skills-grid">
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