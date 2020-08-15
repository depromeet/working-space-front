import React from "react";
import DetailStyled from "./Detail.styles";
import Swiper from "../Swiper/Swiper";
import DetailTitle from "../DetailInfo/DetailTitle";
import DetailInfo from "../DetailInfo/DetailInfo";
import DetailLocation from "../DetailInfo/DetailLocation";
import TagList from "../Tag/TagList";

const Detail = props => {
  const { card, tagCount, hasMainShow } = props;

  return (
    <DetailStyled>
      <DetailTitle title={card.title} distance={card.distance} tagCount={tagCount} />
      <Swiper />
      <DetailInfo />
      <hr />
      <div className="tag-list-wrapper">
        <div className="tag-title">
          <h2 className="tag-text">태그</h2>
        </div>
        <TagList hasMainShow={hasMainShow} hasMoreTags={false} hasDropDownButton={true} />
      </div>
      <hr />
      <DetailLocation />
    </DetailStyled>
  );
};

Detail.defaultProps = {
  tagCount: 5,
  card: { title: "Cafe1", distance: "2.2km" },
};

export default Detail;
