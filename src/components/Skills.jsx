import React from 'react'
import "../style.css/skills.css";


import {skills} from '../data/skills';
const Skills = () => {
  return (
    <div name="skills" className='skills'>
        <div className="container-skills">
            <div className='skills-heading'>
                <p>Skills</p>
                <p>These are the technologies I've worked with</p>
            </div>
            <div className='skills-grid'>
                {skills.map((skill) => (
                    <div key={skill.id}>
                        <img src={skill.img} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills