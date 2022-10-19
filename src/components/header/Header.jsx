import React from 'react';
import CTA from './CTA';
import Myphoto from "../../assets/mypic.png";
import "./header.css";
import HeaderSocial from './HeaderSocial';


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm </h5>
        <h1>Akhil Rathipelly</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={Myphoto} alt="me" className='photo'/>
        </div>
        <a href='#contact' className='scroll__down'> Scroll Down</a>
      </div>
    
    </header>
  )
}

export default Header