import React, { useState } from 'react'
import "../style.css/navbar.css";
import { Link } from 'react-scroll';
import {FaBars,FaTimes} from 'react-icons/fa';

import Logo from "../assets/SJ.png";
const Navbar = () => {
  const [nav,setNav] = useState(false);
  const handleClick = ()=>{
    setNav(!nav);
  }
  return (
    <div className='navbar'>
      <div>
        <img src={Logo} alt="" className='logo' />
      </div>

      {/* MENU */}
      <ul className='menu'>
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>Work</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className='hamburger-menu'>
        {!nav ? <FaBars/> : <FaTimes/>}
        
      </div>
      {/* Mobile Menu */}
      <ul className={!nav ? 'mobile-menu hidden': 'mobile-menu'}>
        <li>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link>
        </li>
        <li>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar;