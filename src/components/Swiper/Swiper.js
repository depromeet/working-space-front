import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import * as SwiperReact from "swiper/react";
import SwiperStyled from "./Swiper.styles";

SwiperCore.use([Navigation, Pagination]);

const Swiper = props => {
  const { slides } = props;

  return (
    <SwiperStyled>
      <SwiperReact.Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {slides.map((slide, index) => (
          <SwiperReact.SwiperSlide key={index}>{slide}</SwiperReact.SwiperSlide>
        ))}
      </SwiperReact.Swiper>
    </SwiperStyled>
  );
};

Swiper.defaultProps = {
  slides: ["slide1", "slide2", "slide3", "slide4", "slide5"],
};

export default Swiper;
