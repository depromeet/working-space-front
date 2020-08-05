import React from "react";
import CardViewStyled from "./CardView.styles";
import RatingStar from "../RatingStar/RatingStar";

const CardView = props => {
  const { imageUrl, imageAlt, rating, length } = props;

  return (
    <CardViewStyled>
      <div className="card-image">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="card-image-info">
        <div className="image-info-box">
          <RatingStar starCount={1} isStarEditable={false} starSize={15} isSimpleMode={true} rating={rating} />
        </div>
        <div className="image-info-box">{length}</div>
      </div>
    </CardViewStyled>
  );
};

export default CardView;
