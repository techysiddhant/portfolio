import React from 'react'
import "../style.css/home.css";
import Avatar from "../assets/logo-my.png";
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa";
import CV from '../assets/siddhant-CV.pdf'
const Home = () => {
  return (
    <div name="home" className='home'>
        <div className="container">
          <div className='avatar'>
            <img src={Avatar} alt="" />
          </div>
        <div>
          <p className='title-1'>Hi, my name is</p>
          <h1 className='title-2'>Siddhant Jain </h1>
          <h2 className='title-3'>I'm a Full Stack Developer.</h2>
          <p className='description'>I'm a full stack developer specializing in building exceptional digitial experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
          <ul className="social-icons">
            <li><a href="https://github.com/techysiddhant"> <FaGithub size={25} /> </a></li>
            <li><a href="https://www.linkedin.com/in/siddhant-jain-5581271a0/"> <FaLinkedin size={25}/> </a></li>
            <li><a href="https://www.instagram.com/techysiddhant/"> <FaInstagram size={25}/> </a></li>
          </ul>
          <a href={CV} download className='view-work'>Download CV</a>
        </div>
        </div>
    </div>
  )
}

export default Home