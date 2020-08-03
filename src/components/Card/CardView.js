import React from "react";
import CardViewStyled from "./CardView.styles";

const CardView = props => {
  const { image, distance } = props;

  return (
    <CardViewStyled>
      <div className="cardImage">{image}</div>
      <div className="distance">{distance}</div>
    </CardViewStyled>
  );
};

CardView.defaultProps = {
  image: "이미지",
  distance: 2.2,
};

export default CardView;
