import React from "react";
import CardViewStyled from "./CardView.styles";

const CardView = props => {
  const { imageUrl, imageAlt, distance } = props;

  return (
    <CardViewStyled>
      <div className="card-image">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="distance">{distance}</div>
    </CardViewStyled>
  );
};

CardView.defaultProps = {
  imageUrl: "https://placehold.it/360x160",
  imageAlt: "카드 이미지",
  distance: 1,
};

export default CardView;
