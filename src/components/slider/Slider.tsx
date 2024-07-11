import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Slider: React.FC = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/xh1WWf3/image-3.jpg" alt="sliderImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/fMF2LQr/image-1.jpg" alt="sliderImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/02CzLDw/image-2.jpg" alt="sliderImage" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
