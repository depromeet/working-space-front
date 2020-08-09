import React, { useCallback } from "react";
import CardListStyled from "./CardList.styles";
import Card from "../Card/Card";
import InfiniteScroller from "../InfiniteScroller/InfiniteScroller";
import { ReactComponent as FilterIcon } from "../../images/icon-filter.svg";

const CardList = props => {
  const { standard, cardDatas, onCardLinkClick, cardHeight, loadNextPage, LoadingIndicator, hasNextPage, isNextPageLoading, mainShow } = props;

  /* prettier-ignore */
  const Item = useCallback(({ data }) => {
    return <Card cardData={data} onCardLinkClick={onCardLinkClick} mainShow={mainShow} />;
  }, [onCardLinkClick]);

  return (
    <CardListStyled>
      <div className="card-list-sort">
        <div className="sort-title">
          지금 나와 가장
          <br /> {standard} 작업 공간은?
        </div>
        <button className="sort-button">
          <FilterIcon />
        </button>
      </div>
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
  standard: "가까운",
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
