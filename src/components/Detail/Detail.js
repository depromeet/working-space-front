import React from "react";
import DetailStyled from "./Detail.styles";
import Swiper from "../Swiper/Swiper";
import DetailTitle from "../DetailInfo/DetailTitle";
import DetailInfo from "../DetailInfo/DetailInfo";
import DetailLocation from "../DetailInfo/DetailLocation";
import TagList from "../Tag/TagList";

const Detail = props => {
  const { card, tagLength } = props;

  return (
    <DetailStyled>
      <DetailTitle title={card.title} />
      <Swiper />
      <DetailInfo />
      <div className="tag-list-wrapper">
        <div className="tag-title">
          <h2 className="tag-text">태그</h2>
          <p className="tag-length">{tagLength}개</p>
        </div>
        <TagList show={false} contraction={false} />
      </div>
      <DetailLocation />
    </DetailStyled>
  );
};

Detail.defaultProps = {
  tagLength: 0,
  card: { title: "Cafe1" },
};

export default Detail;
