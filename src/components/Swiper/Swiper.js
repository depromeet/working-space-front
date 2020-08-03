import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import * as SwiperReact from "swiper/react";
import SwiperStyled from "./Swiper.styles";

SwiperCore.use([Navigation, Pagination]);

const Swiper = props => {
  const { swiperImage } = props;

  return (
    <SwiperStyled>
      <SwiperReact.Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
        {swiperImage.map((x, i) => (
          <SwiperReact.SwiperSlide key={i}>{x}</SwiperReact.SwiperSlide>
        ))}
      </SwiperReact.Swiper>
    </SwiperStyled>
  );
};

Swiper.defaultProps = {
  swiperImage: ["slide1", "slide2", "slide3", "slide4", "slide5"],
};

export default Swiper;
