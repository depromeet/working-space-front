import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwipeStyled from "./Swipe.styles";

SwiperCore.use([Navigation, Pagination]);

const Swipe = props => {
  const { swipeImage } = props;

  return (
    <SwipeStyled>
      <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
        {swipeImage.map((x, i) => (
          <SwiperSlide key={i}>{x}</SwiperSlide>
        ))}
      </Swiper>
    </SwipeStyled>
  );
};

Swipe.defaultProps = {
  swipeImage: ["slide1", "slide2", "slide3", "slide4", "slide5"],
};

export default Swipe;
