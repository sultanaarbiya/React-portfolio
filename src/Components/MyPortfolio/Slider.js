

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './MyPortfolio.css';
import Popup from './Popup'; // Assuming you have a Popup component
import { Grid, Pagination } from 'swiper/modules';
import { Autoplay, Navigation } from 'swiper/modules';



export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Grid,Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={require(`./Images/image${index}.png`)} style={{ width: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>
      {hoveredIndex !== null && <Popup imageIndex={hoveredIndex} />}
    </>
  );
}
