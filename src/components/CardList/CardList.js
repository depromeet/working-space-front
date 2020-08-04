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
  cardList: [
    { id: 0, title: "Cafe1", location: "서울특별시 관악구 22길", imageUrl: "https://placehold.it/360x160", imageAlt: "카드 이미지", distance: "2.2km", rating: 4.3 },
    { id: 1, title: "Cafe2", location: "서울특별시 관악구 22길", imageUrl: "https://placehold.it/360x160", imageAlt: "카드 이미지", distance: "3.1km", rating: 4.5 },
    { id: 2, title: "Cafe3", location: "서울특별시 관악구 22길", imageUrl: "https://placehold.it/360x160", imageAlt: "카드 이미지", distance: "4.2km", rating: 4.2 },
    { id: 3, title: "Cafe4", location: "서울특별시 관악구 22길", imageUrl: "https://placehold.it/360x160", imageAlt: "카드 이미지", distance: "5.3km", rating: 3.8 },
  ],
};

export default CardList;
