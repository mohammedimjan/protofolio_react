import React from "react";
import "./Testimonials.css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit" +
        ". Ut mollitia corrupti eaque in exercitaionem dicta" +
        " doloremque, ratione consectetur ex, cupiditate id asperiores" +
        " facilis explicabo necessitatibus quia beatae odit minima maxime!",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit" +
        ". Ut mollitia corrupti eaque in exercitationem dicta" +
        " doloremque, ratione consectetur ex, cupiditate id asperiores" +
        " facilis explicabo necessitatibus quia beatae odit minima maxime!",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit" +
        ". Ut mollitia corrupti eaque in exercitationem dicta" +
        " doloremque, ratione consectetur ex, cupiditate id asperiores" +
        " facilis explicabo necessitatibus quia beatae odit minima maxime!",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit" +
        ". Ut mollitia corrupti eaque in exercitationem dicta" +
        " doloremque, ratione consectetur ex, cupiditate id asperiores" +
        " facilis explicabo necessitatibus quia beatae odit minima maxime!",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>From me....</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        sliderPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img}></img>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
