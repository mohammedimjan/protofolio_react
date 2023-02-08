import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Protofolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={HOC} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
