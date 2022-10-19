import React from 'react'; 
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className='header__social'> 
    <a href="http://linkedin.com"  target="_blank"><BsLinkedin/></a>
    <a href="http://github.com"  target="_blank"><BsGithub/></a>
   < a href="http://twitter.com"  target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocial