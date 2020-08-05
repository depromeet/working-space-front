import React from "react";
import CardListStyled from "./CardList.styles";
import Card from "../Card/Card";

const CardList = props => {
  const { cardList, onCardLinkClick } = props;

  return (
    <CardListStyled>
      {cardList.map((card, i) => (
        <Card key={i} cardData={card} onCardLinkClick={onCardLinkClick} />
      ))}
    </CardListStyled>
  );
};

CardList.defaultProps = {
  cardList: [],
};

export default CardList;
