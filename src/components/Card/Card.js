import React, { useCallback } from "react";
import CardStyled from "./Card.styles";
import CardView from "./CardView";
import CardInfo from "./CardInfo";

const Card = props => {
  const { cardData, hasMainShow, showOnlyInfo } = props;

  const handleCardLinkClick = useCallback(() => {
    props.onCardLinkClick && props.onCardLinkClick(cardData);
  }, [props.onCardLinkClick]);

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
    distance: "2.2km",
    rating: 0.0,
    tags: [
      { id: "study", count: 12, isSelected: false },
      { id: "concent", count: 23, isSelected: false },
    ],
  },
  showOnlyInfo: false,
};

export default Card;
