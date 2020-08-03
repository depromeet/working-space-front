import React from "react";
import CardStyled from "./Card.styles";
import CardView from "./CardView";
import CardInfo from "./CardInfo";

const Card = props => {
  const { cardData } = props;

  return (
    <CardStyled>
      <CardView imageUrl={cardData.imageUrl} imageAlt={cardData.imageAlt} distance={cardData.distance} />
      <CardInfo title={cardData.title} location={cardData.location} rating={cardData.rating} />
    </CardStyled>
  );
};

Card.defaultProps = {
  cardData: { title: "Cafe", location: "Location", imageUrl: "https://placehold.it/360x160", imageAlt: "카드 이미지", distance: "2.2km", rating: 4.5 },
};

export default Card;
