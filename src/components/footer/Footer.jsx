import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaInstagram} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";




import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Akhil Rathipelly</a>
      <ul  className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonails</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>


      <div className='footer__socials'>
        <a href='http://linkedin.com'><BsLinkedin/></a>
        <a href='http://Instagram.com'><FaInstagram/></a>
        <a href='http://Twitter.com'><BsTwitter/></a>

      </div>

      <div className='footer__copyright'>
        <small>&copy; Akhil Rathipelly.All rights reserved.</small>

      </div>
    </footer>
  )
}

export default Footer