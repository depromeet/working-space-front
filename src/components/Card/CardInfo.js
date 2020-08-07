import React from "react";
import CardInfoStyled from "./CardInfo.styles";
import RatingStar from "../RatingStar/RatingStar";

const CardInfo = props => {
  const { title, location, rating } = props;
  return (
    <CardInfoStyled>
      <div className="card-info">
        <div className="info-top">
          <h2 className="card-title">{title}</h2>
          <RatingStar starCount={1} isStarEditable={false} starSize={15} isSimpleMode={true} rating={rating} />
        </div>
        <p className="location">{location}</p>
      </div>
    </CardInfoStyled>
  );
};

CardInfo.defaultProps = {
  title: "Cafe",
  location: "Location",
  rating: 4.5,
};

export default CardInfo;
