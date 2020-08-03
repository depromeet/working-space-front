import styled from "styled-components";
import "swiper/swiper-bundle.css";

const SwiperStyled = styled.div`
  width: 100vw;
  height: 220px;
  position: absolute;
  top: 0;
  z-index: 0;

  .swiper-container {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background-color: #e0e0e0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default SwiperStyled;
