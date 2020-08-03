import React from "react";
import CardStyled from "./Card.styles";
import CardView from "./CardView";
import CardInfo from "./CardInfo";

const Card = props => {
  const { cardData } = props;

  return (
    <CardStyled>
      <CardView image={cardData.image} distance={cardData.distance} />
      <CardInfo title={cardData.title} location={cardData.location} />
    </CardStyled>
  );
};

Card.defaultProps = {
  cardData: { title: "카페", location: "주소", image: "이미지", distance: "2.2km" },
};

export default Card;
