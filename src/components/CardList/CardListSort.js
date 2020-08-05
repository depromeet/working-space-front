import React from "react";
import CardListSortStyled from "./CardListSort.styles";

const CardListSort = props => {
  const { standard } = props;

  return (
    <CardListSortStyled>
      <div className="sort-title">
        지금 나와 가장
        <br /> {standard} 작업 공간은?
      </div>
      <button className="sort-button">S</button>
    </CardListSortStyled>
  );
};

CardListSort.defaultProps = {
  standard: "가까운",
};

export default CardListSort;
