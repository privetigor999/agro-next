import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, Autoplay } from "swiper";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export const SwiperBlock = ({ images }) => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        autoplay
        loop
        pagination={{ clickable: true }}
      >
        {images?.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              className="w-full h-[194px] md:h-[330px] lg:h-[590px] object-cover"
              src={image}
              alt="field"
              priority={i === 0 ? true : false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
