import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
const Portfolio = () => {
  
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      {/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span> */}
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={7}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src='/assets/pic.jpg' alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src='/assets/pic.jpg' alt="" />
         
        </SwiperSlide>
        <SwiperSlide>
        <img src='/assets/pic.jpg' alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
        <img src='/assets/pic.jpg' alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
        <img src='/assets/pic.jpg' alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
        <img src='/assets/pic.jpg' alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
        <img src='/assets/pic.jpg' alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
        <img src='/assets/pic.jpg' alt="" />
          
        </SwiperSlide>
        <SwiperSlide>
        <img src='/assets/pic.jpg' alt="" />
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
