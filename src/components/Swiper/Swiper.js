import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import * as SwiperReact from "swiper/react";
import SwiperStyled from "./Swiper.styles";
import NoneImage from "../NoneImage/NoneImage";

SwiperCore.use([Navigation, Pagination]);

const Swiper = props => {
  const { imageUrl, imageAlt } = props;

  if (imageUrl === null) {
    return <NoneImage />;
  }

  return (
    <SwiperStyled>
      {imageUrl.length !== 1 ? (
        <SwiperReact.Swiper slidesPerView={1} pagination={{ clickable: true }}>
          {imageUrl.map((slide, index) => (
            <SwiperReact.SwiperSlide key={index}>
              <img src={slide} alt={imageAlt} />
            </SwiperReact.SwiperSlide>
          ))}
        </SwiperReact.Swiper>
      ) : (
        <div className="swiper-container">
          <div className="swiper-slide">
            <img src={imageUrl} alt={imageAlt} />
          </div>
        </div>
      )}
    </SwiperStyled>
  );
};

Swiper.defaultProps = {
  imageUrl: null,
  imageAlt: null,
};

export default Swiper;
