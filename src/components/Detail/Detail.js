import React from "react";
import DetailStyled from "./Detail.styles";
import Swiper from "../Swiper/Swiper";
import DetailTitle from "../DetailInfo/DetailTitle";
import DetailInfo from "../DetailInfo/DetailInfo";
import DetailLocation from "../DetailInfo/DetailLocation";
import TagList from "../Tag/TagList";

const Detail = props => {
  const { card, hasMainShow, mapRef } = props;

  return (
    <DetailStyled>
      <DetailTitle title={card.title} distance={card.distance} tagCount={card.tags.length} />
      <Swiper />
      <DetailInfo />
      <hr />
      <div className="tag-list-wrapper">
        <div className="tag-title">
          <h2 className="tag-text">태그</h2>
        </div>
        <TagList tags={card.tags} hasMainShow={hasMainShow} hasMoreTags={false} hasDropDownButton={true} isShowFollow={true} />
      </div>
      <hr />
      <DetailLocation mapRef={mapRef} />
    </DetailStyled>
  );
};

Detail.defaultProps = {
  tagCount: 5,
  card: {
    title: "Cafe1",
    distance: "2.2km",
    tags: [
      { name: "study", follow: 12, isSelected: false },
      { name: "concent", follow: 23, isSelected: false },
      { name: "mute", follow: 21, isSelected: false },
      { name: "wifi", follow: 16, isSelected: false },
      { name: "parking", follow: 7, isSelected: false },
      { name: "dessert", follow: 2, isSelected: false },
      { name: "toilet", follow: 3, isSelected: false },
      { name: "twentyFour", follow: 4, isSelected: false },
      { name: "smoking", follow: 5, isSelected: false },
      { name: "timer", follow: 6, isSelected: false },
      { name: "seat", follow: 7, isSelected: false },
      { name: "chair", follow: 1, isSelected: false },
    ],
  },
  mapRef: null,
};

export default Detail;
