import React, { useCallback } from "react";
import CardStyled from "./Card.styles";
import CardView from "./CardView";
import CardInfo from "./CardInfo";

const Card = props => {
  const { cardData, hasMainShow, showOnlyInfo, onCardLinkClick } = props;

  const handleCardLinkClick = useCallback(() => {
    onCardLinkClick && onCardLinkClick(cardData);
  }, [onCardLinkClick, cardData]);

  return (
    <CardStyled onClick={handleCardLinkClick} showOnlyInfo={showOnlyInfo}>
      {!showOnlyInfo && <CardView imageUrl={cardData.imageUrl} imageAlt={cardData.imageAlt} rating={cardData.rating} tagCount={cardData.tags.length} />}
      <CardInfo title={cardData.name} location={cardData.address} distance={cardData.distance} rating={cardData.rating} tags={cardData.tags} hasMainShow={hasMainShow} showOnlyInfo={showOnlyInfo} />
    </CardStyled>
  );
};

Card.defaultProps = {
  cardData: {
    title: "Cafe",
    location: "Location",
    imageUrl: "https://placehold.it/360x160",
    imageAlt: "카드 이미지",
    distance: "0.0km",
    rating: 0.0,
    tags: null,
  },
  showOnlyInfo: false,
};

export default Card;
