import React from 'react'
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";

import "./contact.css";

const Contact = () => {
  return (
   <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact me</h2>
    <div className="container contact__container">
      <div className="contact__options">
       
      <article className="contact__option">
          <MdOutlineEmail className='contact_option-icon'/>
<h4>Email</h4>
<h5>akhilrathipelly07@gmail.com</h5>
<a href="mailto:akhilrathipelly07@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact_option-icon'/>
<h4>Whatsapp</h4> 
<h5>+919550916455</h5>
<a href="https://api.whatsapp.com/send?phone=+919550916455" target="_blank">Send a message</a>
        </article>
      </div>
      {/*END OF CONTACT OPTIONS*/}
      
      <form action="">
   <input type="text" name='name' placeholder= 'Your Full Name' required />
  <input type="email" name='email' placeholder= 'Your Email' required />
  <textarea name= "message" rows="7" placeholder= "Your Message" required ></textarea>
  <button type='submit' className='btn btn-primary'> Send Message</button>
</form>

      
    </div>
   </section>
  )
}

export default Contact;