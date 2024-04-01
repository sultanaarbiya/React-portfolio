import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './MyPortfolio.css'

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
          fill:"row",
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
       
        <SwiperSlide className='swipe'> <img src={require("./Images/image1.png")} style={{width:"100%"}}></img></SwiperSlide>
        <SwiperSlide className='swipe'> <img src={require("./Images/image2.png")} style={{width:"100%"}}></img></SwiperSlide>
        <SwiperSlide className='swipe'> <img src={require("./Images/image3.png")} style={{width:"100%"}}></img></SwiperSlide>
        <SwiperSlide className='swipe'> <img src={require("./Images/imag4.png")} style={{width:"100%"}}></img></SwiperSlide>
        <SwiperSlide className='swipe'> <img src={require("./Images/imag5.png")} style={{width:"100%"}}></img></SwiperSlide>
        <SwiperSlide className='swipe'> <img src={require("./Images/image6.png")}  style={{width:"100%"}}></img></SwiperSlide>
        <SwiperSlide className='swipe'> <img src={require("./Images/image7.png")}  style={{width:"100%"}}></img></SwiperSlide>
        <SwiperSlide className='swipe'> <img src={require("./Images/image8.png")}  style={{width:"100%"}}></img></SwiperSlide>
        <SwiperSlide className='swipe'> <img src={require("./Images/tindog.jpg")}  style={{width:"100%"}}></img></SwiperSlide>
       
      </Swiper>
    </>
  );
}
