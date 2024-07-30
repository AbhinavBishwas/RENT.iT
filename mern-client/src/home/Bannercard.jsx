import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Bannercard.css';
import book1 from '../assets/Books/Book1.jpg'
import book2 from '../assets/Books/Book2.jpg'
import book3 from '../assets/Books/Book3.jpg'
import book4 from '../assets/Books/Book4.jpg'
import book5 from '../assets/Books/Book5.jpg'
import Book6 from '../assets/Books/Book6.jpg'

// Import required modules
import { EffectCards } from 'swiper/modules';

const Bannercard = () => {
  return (
    <div >
      
      <Swiper
      className="banner-swiper"
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        
      >
        <SwiperSlide><img className='border border-r-2 rounded-lg' src={book1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='border border-r-2 rounded-lg' src={book2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='border border-r-2 rounded-lg' src={book3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='border border-r-2 rounded-lg' src={book4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='border border-r-2 rounded-lg' src={book5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='border border-r-2 rounded-lg' src={Book6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Bannercard;
