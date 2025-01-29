import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Banner() {
    const headerData = [
        { title: 'Title 1' },
        { title: 'Title 2' },
        { title: 'Title 3' },
        { title: 'Title 4' },
      ];
  return (
<div className="swiper-wrapper my-5">
        <Swiper
          className="swiper-container"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 10000 }}
          pagination={{ clickable: true }}
        >
          {headerData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="banner-image w-full">
                <h1 className="text-2xl text-center">{item.title}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>  
    )
}
