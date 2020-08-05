import React from "react";
import CardInfoStyled from "./CardInfo.styles";

const CardInfo = props => {
  const { title, location, distance } = props;

  return (
    <CardInfoStyled>
      <div className="card-info">
        <div className="info-top">
          <h2 className="card-title">{title}</h2>
          <span className="distance">{distance}</span>
        </div>
        <p className="location">{location}</p>
      </div>
    </CardInfoStyled>
  );
};

export default CardInfo;
