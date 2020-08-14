import React, { useCallback, useState } from "react";
import ReactPlaceHolder from "react-placeholder";
import CardViewStyled from "./CardView.styles";
import RatingStar from "../RatingStar/RatingStar";
import { ReactComponent as StarIcon } from "../../images/icon-star-fill.svg";
import { ReactComponent as SmallTagIcon } from "../../images/icon-small-tag-fill.svg";

const EmptyStarIcon = () => <StarIcon width={16} height={16} style={{ color: "#fff" }} />;
const FilledStarIcon = () => <StarIcon width={16} height={16} style={{ color: "#fff" }} />;

const CardView = props => {
  const { imageUrl, imageAlt, rating, tagCount } = props;
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  const handleLoadImage = useCallback(() => {
    setIsLoadedImage(true);
  }, []);

  return (
    <ReactPlaceHolder type="rect" ready={isLoadedImage}>
      <CardViewStyled>
        <div className="card-image">
          <img src={imageUrl} alt={imageAlt} onLoad={handleLoadImage} />
        </div>
        <div className="card-image-info">
          <div className="image-info-box">
            <RatingStar starCount={1} isStarEditable={false} starSize={10} rating={rating} isShowAttendantCount={false} ratingTextColor="#fff" EmptyIcon={EmptyStarIcon} FilledIcon={FilledStarIcon} />
          </div>
          <div className="image-info-box">
            <SmallTagIcon style={{ color: "#ffffff" }} />
            태그 {tagCount}개
          </div>
        </div>
      </CardViewStyled>
    </ReactPlaceHolder>
  );
};

CardView.defaultProps = {
  imageUrl: "https://placehold.it/360x160",
  imageAlt: "카드 이미지",
  distance: 1,
  tagCount: 5,
};

export default CardView;
