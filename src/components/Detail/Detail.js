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
      <DetailTitle />
      <Swiper />
      <DetailInfo title={card.title} />
      <AllTag />
      <DetailLocation />
    </DetailStyled>
  );
};

Detail.defaultProps = {
  card: { title: "Cafe1", location: "서울특별시 관악구 22길", imageUrl: "https://placehold.it/360x160", imageAlt: "카드 이미지", distance: "2.2km", rating: 4.3 },
};

export default Detail;
