import React from "react";
import CardViewStyled from "./CardView.styles";

const CardView = props => {
  const { image, distance } = props;

  return (
    <CardViewStyled>
      <div className="card-image">{image}</div>
      <div className="distance">{distance}</div>
    </CardViewStyled>
  );
};

CardView.defaultProps = {
  image: "Image",
  distance: 1,
};

export default CardView;
