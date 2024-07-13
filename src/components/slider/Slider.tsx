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
          <img
            src="https://i.ibb.co/j6xZggr/pexels-rdne-7915228-1.jpg"
            alt="sliderImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/0K6xJd9/jay-zhang-J10-Tawz-EW6-Q-unsplash-1.jpg"
            alt="sliderImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/2gf6tdV/michelle-ding-50u-D7-Hz-OLW8-unsplash-1.jpg"
            alt="sliderImage"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/VSNjBW1/paul-esch-laurent-8ss-NFn4-VPLg-unsplash-2.jpg"
            alt="sliderImage"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
