import React from "react";
import CardStyled from "./Card.styles";
import CardView from "./CardView";
import CardInfo from "./CardInfo";

const Card = props => {
  const { cardData } = props;

  return (
    <CardStyled>
      <CardView image={cardData.image} distance={cardData.distance} />
      <CardInfo title={cardData.title} location={cardData.location} rating={cardData.rating} />
    </CardStyled>
  );
};

Card.defaultProps = {
  cardData: { title: "Cafe", location: "Location", image: "Image", distance: "2.2km", rating: 4.5 },
};

export default Card;
