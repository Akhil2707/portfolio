import React from 'react'; 
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className='header__social'> 
    <a href="https://www.linkedin.com/in/akhilrathipelly/"  target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/Akhil2707"  target="_blank"><BsGithub/></a>
   < a href="http://twitter.com"  target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocial