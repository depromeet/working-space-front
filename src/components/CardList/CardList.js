import React, { useCallback } from "react";
import CardListStyled from "./CardList.styles";
import Card from "../Card/Card";
import InfiniteScroller from "../InfiniteScroller/InfiniteScroller";
import { ReactComponent as FilterIcon } from "../../images/icon-filter.svg";
import LoadingBar from "../LoadingBar/LoadingBar";

const CardList = props => {
  const { standard, cardDatas, onCardLinkClick, cardHeight, loadNextPage, LoadingIndicator, hasNextPage, isNextPageLoading, hasMainShow } = props;

  const CardItem = useCallback(
    ({ style, index, data }) => {
      /* prettier-ignore */
      if (!data[index]) return <div style={style}><LoadingIndicator /></div>;

      return (
        <div style={style}>
          <Card cardData={data[index]} onCardLinkClick={onCardLinkClick} hasMainShow={hasMainShow} />
        </div>
      );
    },
    [onCardLinkClick, hasMainShow, LoadingIndicator],
  );

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
        Item={CardItem}
        itemSize={cardHeight}
        hasNextPage={hasNextPage}
        isNextPageLoading={isNextPageLoading}
        loadNextPage={loadNextPage}
        LoadingIndicator={LoadingIndicator}
      />
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
    tags: [
      { id: "study", count: 12, isSelected: false },
      { id: "concent", count: 23, isSelected: false },
      { id: "mute", count: 21, isSelected: false },
      { id: "wifi", count: 16, isSelected: false },
      { id: "parking", count: 7, isSelected: false },
      { id: "dessert", count: 2, isSelected: false },
      { id: "toilet", count: 3, isSelected: false },
      { id: "twentyFour", count: 4, isSelected: false },
      { id: "smoking", count: 5, isSelected: false },
      { id: "timer", count: 6, isSelected: false },
      { id: "seat", count: 7, isSelected: false },
      { id: "chair", count: 1, isSelected: false },
    ],
  })),
  cardHeight: 260,
  hasNextPage: true,
  isNextPageLoading: true,
  loadNextPage: () => console.log("다음 페이지를 로드합니다."),
  LoadingIndicator: () => <LoadingBar />,
};

export default CardList;
