import React from 'react'
import "../style.css/contact.css";
const Contact = () => {
  return (
    <div name="contact" className='contact'>
        <form action="https://getform.io/f/54da67db-3b47-4c6e-b318-fc1f69147169" method='POST' className='contact-form'>
            <div className="form-div">
                <p>Contact</p>
                <p>Submit the form below or shoot me an email - jainsiddhant9599@gmail.com</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='input-text' />
            <input type="email" placeholder='Email' name='email' className='input-email'  />
            <textarea name="message" rows="10" placeholder='Message' className='text-area'></textarea>
            <button className='submit-button'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact