import React, { useCallback } from "react";
import CardStyled from "./Card.styles";
import CardView from "./CardView";
import CardInfo from "./CardInfo";

const Card = props => {
  const { cardData, hasMainShow } = props;

  const handleCardLinkClick = useCallback(() => {
    props.onCardLinkClick && props.onCardLinkClick(cardData);
  }, [props.onCardLinkClick]);

  return (
    <CardStyled onClick={handleCardLinkClick}>
      <CardView imageUrl={cardData.imageUrl} imageAlt={cardData.imageAlt} tagCount={cardData.tagCount} />
      <CardInfo title={cardData.title} location={cardData.location} distance={cardData.distance} hasMainShow={hasMainShow} />
    </CardStyled>
  );
};

Card.defaultProps = {
  cardData: { title: "Cafe", location: "Location", imageUrl: "https://placehold.it/360x160", imageAlt: "카드 이미지", distance: "2.2km", rating: 4.5, tagCount: 5 },
};

export default Card;
