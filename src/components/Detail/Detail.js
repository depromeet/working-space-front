import React from "react";
import DetailStyled from "./Detail.styles";
import Swiper from "../Swiper/Swiper";
import DetailTitle from "../DetailInfo/DetailTitle";
import DetailInfo from "../DetailInfo/DetailInfo";
import DetailLocation from "../DetailInfo/DetailLocation";
import AllTag from "../Tag/AllTag";

const Detail = props => {
  const { card } = props;

  return (
    <DetailStyled>
      <DetailTitle title={card.title} />
      <Swiper />
      <DetailInfo />
      <AllTag />
      <DetailLocation />
    </DetailStyled>
  );
};

Detail.defaultProps = {
  card: { title: "Cafe1" },
};

export default Detail;
