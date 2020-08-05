import React, { useCallback } from "react";
import CardStyled from "./Card.styles";
import CardView from "./CardView";
import CardInfo from "./CardInfo";

const Card = props => {
  const { cardData } = props;

  const handleCardLinkClick = useCallback(() => {
    props.onCardLinkClick && props.onCardLinkClick(cardData);
  }, [props.onCardLinkClick]);

  return (
    <CardStyled onClick={handleCardLinkClick}>
      <CardView imageUrl={cardData.imageUrl} imageAlt={cardData.imageAlt} length={cardData.tagLength} />
      <CardInfo title={cardData.title} location={cardData.location} distance={cardData.distance} />
    </CardStyled>
  );
};

export default Card;
