import React from "react";
import CardListStyled from "./CardList.styles";
import Card from "../Card/Card";

const CardList = props => {
  const { cardList } = props;

  return (
    <CardListStyled>
      {cardList.map((card, i) => (
        <Card key={i} cardData={card} />
      ))}
    </CardListStyled>
  );
};

Card.defaultProps = {
  cardList: [
    { title: "카페", location: "주소", image: "이미지" },
    { title: "카페", location: "주소", image: "이미지" },
    { title: "카페", location: "주소", image: "이미지" },
  ],
};

export default CardList;
