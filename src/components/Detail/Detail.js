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
      <DetailTitle name={card.name} distance={card.distance} tagCount={card.tags.length} />
      <Swiper imageUrl={card.imageUrl} imageAlt={card.imageAlt} />
      <DetailInfo address={card.address} phone={card.phone} />
      <hr />
      <div className="tag-list-wrapper">
        <div className="tag-title">
          <h2 className="tag-text">태그</h2>
        </div>
        <TagList tags={card.tags} hasMainShow={hasMainShow} hasMoreTags={false} hasDropDownButton={true} isShowCount={true} />
      </div>
      <hr />
      <DetailLocation mapRef={mapRef} latitude={card.latitude} longitude={card.longitude} dataId={card.dataId} />
    </DetailStyled>
  );
};

Detail.defaultProps = {
  card: {
    id: "Cafe",
    distance: "0km",
    tags: [
      { id: "study", count: 12, isSelected: false },
      { id: "concent", count: 23, isSelected: false },
      { id: "mute", count: 21, isSelected: false },
      { id: "wifi", count: 16, isSelected: false },
      { id: "parking", count: 7, isSelected: false },
      { id: "dessert", count: 2, isSelected: false },
      { id: "toilet", count: 3, isSelected: false },
      { id: "twentyFour", count: 4, isSelected: false },
      { id: "smoking", count: 5, isSelected: false },
      { id: "timer", count: 6, isSelected: false },
      { id: "seat", count: 7, isSelected: false },
      { id: "chair", count: 1, isSelected: false },
    ],
    address: null,
    phone: null,
    imageUrl: null,
  },
  mapRef: null,
};

export default Detail;
