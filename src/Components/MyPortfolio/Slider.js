import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/grid';
// import 'swiper/css/pagination';

import './MyPortfolio';

// import required modules
// import { Grid } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper

      spaceBetween={50}// space between slides
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Grid, Pagination]}
        className="mySwiper"
       
>
     <SwiperSlide ><img /></SwiperSlide>
     <SwiperSlide ><img /></SwiperSlide>
     <SwiperSlide ><img /></SwiperSlide>
     <SwiperSlide ><img /></SwiperSlide>
     <SwiperSlide><img /></SwiperSlide>
  
      </Swiper>
    </>
  );
}
