import React, { useCallback, useState } from "react";
import CardViewStyled from "./CardView.styles";
import RatingStar from "../RatingStar/RatingStar";
import Image from "../Image/Image";
import NoneImage from "../NoneImage/NoneImage";
import { ReactComponent as StarIcon } from "../../images/icon-star-fill.svg";
import { ReactComponent as SmallTagIcon } from "../../images/icon-small-tag-fill.svg";

const EmptyStarIcon = () => <StarIcon width={16} height={16} style={{ color: "#fff" }} />;
const FilledStarIcon = () => <StarIcon width={16} height={16} style={{ color: "#fff" }} />;

const CardView = props => {
  const { imageUrl, imageAlt, rating, tagCount } = props;

  return (
    <CardViewStyled>
      <div className="card-image">{imageUrl !== null ? <Image src={imageUrl} alt={imageAlt} /> : <NoneImage />}</div>
      <div className="card-image-info">
        {rating !== null && (
          <div className="image-info-box info-box-1">
            <RatingStar
              starCount={1}
              isStarEditable={false}
              starSize={10}
              rating={rating}
              isShowAttendantCount={false}
              ratingTextColor="#fff"
              ratingCurrentTextColor="#fff"
              EmptyIcon={EmptyStarIcon}
              FilledIcon={FilledStarIcon}
            />
          </div>
        )}
        {tagCount !== null && (
          <div className="image-info-box info-box-2">
            <SmallTagIcon style={{ color: "#ffffff" }} />
            태그 {tagCount}개
          </div>
        )}
      </div>
    </CardViewStyled>
  );
};

CardView.defaultProps = {
  imageUrl: "https://placehold.it/360x160",
  imageAlt: "카드 이미지",
  tagCount: 5,
  rating: null,
};

export default CardView;
