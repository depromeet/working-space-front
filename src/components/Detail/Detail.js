import React from "react";
import DetailStyled from "./Detail.styles";
import Swiper from "../Swiper/Swiper";
import DetailTitle from "../DetailInfo/DetailTitle";
import DetailInfo from "../DetailInfo/DetailInfo";
import DetailLocation from "../DetailInfo/DetailLocation";
import TagList from "../Tag/TagList";

const Detail = props => {
  const { card, tagLength, mainShow } = props;

  return (
    <DetailStyled>
      <DetailTitle title={card.title} distance={card.distance} tagLength={tagLength} />
      <Swiper />
      <DetailInfo />
      <div className="tag-list-wrapper">
        <div className="tag-title">
          <h2 className="tag-text">태그</h2>
        </div>
        <TagList show={false} contraction={false} mainShow={mainShow} />
      </div>
      <DetailLocation />
    </DetailStyled>
  );
};

Detail.defaultProps = {
  tagLength: 5,
  card: { title: "Cafe1", distance: "2.2km" },
};

export default Detail;
