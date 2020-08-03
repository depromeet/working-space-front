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

CardList.defaultProps = {
  cardList: [
    { title: "Cafe1", location: "서울특별시 관악구 22길", image: "Image", distance: "2.2km", rating: 4.3 },
    { title: "Cafe2", location: "서울특별시 관악구 22길", image: "Image", distance: "3.1km", rating: 4.5 },
    { title: "Cafe3", location: "서울특별시 관악구 22길", image: "Image", distance: "4.2km", rating: 4.2 },
    { title: "Cafe4", location: "서울특별시 관악구 22길", image: "Image", distance: "5.3km", rating: 3.8 },
  ],
};

export default CardList;
