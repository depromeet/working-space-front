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
      <DetailTitle name={card.name} distance={card.distance} tagCount={card.tagCount} />
      <Swiper imageUrl={card.imageUrl} imageAlt={card.imageAlt} />
      <DetailInfo address={card.address} phone={card.phone} />
      <hr />
      <div className="tag-list-wrapper">
        <div className="tag-title">
          <h2 className="tag-text">태그</h2>
        </div>
        <TagList tags={card.tags} tagCount={card.tagCount} hasMainShow={hasMainShow} hasMoreTags={false} hasDropDownButton={true} isShowFollow={true} />
      </div>
      <hr />
      <DetailLocation mapRef={mapRef} latitude={card.latitude} longitude={card.longitude} dataId={card.dataId} />
    </DetailStyled>
  );
};

Detail.defaultProps = {
  card: {
    name: "Cafe",
    distance: "0km",
    tagCount: 10,
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
    address: null,
    phone: null,
    imageUrl: null,
  },
  mapRef: null,
};

export default Detail;
