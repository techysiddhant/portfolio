import React from 'react'
import "../style.css/work.css";
// import WorkImg from "../assets/projects/workImg.jpeg";
import {FaGithub} from "react-icons/fa";

// import Unfold from "../assets/projects/unfold.png"
import { projects } from '../data/projects';
const Work = () => {
  return (
    <div name="work" className='work'>
        <div className="container-work">
            <div className='work-heading'>
                <p>Work</p>
                <p>Check out some of my recent work</p>
            </div>
            {/* CARDS */}
            <div className="projects">
            {projects.map((project)=>(
                <div className="project" key={project.id}>
                <div className="project-info">
                    <h2>{project.title}</h2>
                    <div>
                        <ul>
                            <li>{project.desc.p1}</li>
                            <li>{project.desc.p2}</li>
                            <li>{project.desc.p3}</li>
                            <li>{project.desc.p4}</li>
                            
                        </ul>
                    </div>
                    <div className='project-links'>
                            <a href={project.live}>Check it Out</a>
                            <a href={project.github}><FaGithub size={30} /></a>
                    </div>
                </div>
                <div className="project-img">
                    <img src={project.img} alt={project.title} />
                </div>
            </div>
            ))}
                
            </div>
        </div>
    </div>
)
}

export default Work