import "./Skills.css";
import skillsData from "../../data/skillsData";
import SkillCard from "./SkillsCard/SkillsCard";

function Skills() {
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