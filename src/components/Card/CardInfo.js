import React from "react";
import CardInfoStyled from "./CardInfo.styles";

const CardInfo = props => {
  const { title, location } = props;

  return (
    <CardInfoStyled>
      <div className="cardTitle">{title}</div>
      <div className="location">{location}</div>
    </CardInfoStyled>
  );
};

CardInfo.defaultProps = {
  title: "카페",
  location: "서울특별시 관악구 22길",
};

export default CardInfo;
