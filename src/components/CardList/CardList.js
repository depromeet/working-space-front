import React, { useCallback } from "react";
import CardListStyled from "./CardList.styles";
import Card from "../Card/Card";
import InfiniteScroller from "../InfiniteScroller/InfiniteScroller";

const CardList = props => {
  const { cardDatas, onCardLinkClick, cardHeight, loadNextPage, LoadingIndicator, hasNextPage, isNextPageLoading } = props;

  /* prettier-ignore */
  const Item = useCallback(({ data }) => {
    return <Card cardData={data} onCardLinkClick={onCardLinkClick} />;
  }, [onCardLinkClick]);

  return (
    <CardListStyled>
      <InfiniteScroller
        datas={cardDatas}
        Item={Item}
        itemSize={cardHeight}
        hasNextPage={hasNextPage}
        isNextPageLoading={isNextPageLoading}
        loadNextPage={loadNextPage}
        LoadingIndicator={LoadingIndicator}
      />
      ;
    </CardListStyled>
  );
};

CardList.defaultProps = {
  cardDatas: Array.from(Array(10), (v, i) => ({
    id: i,
    title: `Cafe${i + 1}`,
    location: "서울특별시 관악구 22길",
    imageUrl: "https://placehold.it/360x160",
    imageAlt: `${i}번카드 이미지`,
    distance: `${(Math.random() * 10).toFixed(2)}km`,
    rating: (Math.random() * 5).toFixed(2),
  })),
  cardHeight: 260,
  hasNextPage: true,
  isNextPageLoading: true,
  loadNextPage: () => console.log("다음 페이지를 로드합니다."),
  LoadingIndicator: () => "로딩중입니다...",
};

export default CardList;
