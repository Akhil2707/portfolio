import React from 'react';
import AVT1 from "../../assets/manohar.png";
import AVT2 from "../../assets/azam.png";
import AVT3 from "../../assets/murali.jpg";
import AVT4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


import "./testimonials.css";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }} 
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img  src={AVT1} alt="Avatar one"/>
            </div>
            <h5 className='client__name'>chimata manohar</h5>
            <small className='client__review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img  src={AVT2} alt="Avatar one"/>
            </div>
            <h5 className='client__name'>Mohammed Azam</h5>
            <small className='client__review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img  src={AVT3} alt="Avatar one"/>
            </div>
            <h5 className='client__name'>Marthula Murali</h5>
            <small className='client__review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </small>
          </SwiperSlide>
          <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img  src={AVT4} alt="Avatar one"/>
            </div>
            <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </small>
          </SwiperSlide>
          
           </Swiper>
    </section>
  )
}

export default Testimonials