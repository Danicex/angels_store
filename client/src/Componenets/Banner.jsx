import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image1 from '../assets/angel_store_image001.png';
import image2 from '../assets/angel_store_image002.png';
import image3 from '../assets/angel_store_image003.png';
import image4 from '../assets/angel_store_image004.png';

export default function Banner() {
  const headerData = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
  ];

  return (
    <div className="">
      <Swiper
        className="swiper-container"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
      >
        {headerData.map((item, index) => (
          <SwiperSlide key={index}>
                   <img
      src={item.image}
      alt={`Slide ${index + 1}`}
      className='m-auto'
    />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
