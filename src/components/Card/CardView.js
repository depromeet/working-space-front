import React from "react";
import CardViewStyled from "./CardView.styles";
import RatingStar from "../RatingStar/RatingStar";

const CardView = props => {
  const { imageUrl, imageAlt, rating, tagLength } = props;

  return (
    <CardViewStyled>
      <div className="card-image">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="card-image-info">
        <div className="image-info-box">
          <RatingStar starCount={1} isStarEditable={false} starSize={15} isSimpleMode={true} rating={rating} />
        </div>
        <div className="image-info-box">태그 {tagLength}개</div>
      </div>
    </CardViewStyled>
  );
};

CardView.defaultProps = {
  imageUrl: "https://placehold.it/360x160",
  imageAlt: "카드 이미지",
  distance: 1,
  tagLength: 0,
};

export default CardView;
