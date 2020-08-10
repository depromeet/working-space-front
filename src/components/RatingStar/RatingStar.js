import React, { useCallback, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ReactComponent as StarIcon } from "../../images/icon-star-fill.svg";
import RatingStarStyled from "./RatingStar.styles";

const RatingStar = props => {
  const { starSize, starActiveColor, isStarHalf, starColor, isStarEditable, isSimpleMode, starCount, attendantCount, FilledIcon, EmptyIcon } = props;
  const [rating, setRating] = useState(parseFloat(props.rating).toFixed(1));
  let ratingCount = isSimpleMode ? `${rating}` : `${rating} / ${starCount}`;
  if (isSimpleMode && attendantCount !== 0) ratingCount += `(${attendantCount})`;

  const onRatingChanged = useCallback(newRating => {
    setRating(newRating);
    props.onRatingChanged && props.onRatingChanged();
  }, []);

  return (
    <RatingStarStyled simple={isSimpleMode}>
      <div className="rating_area">
        <ReactStars
          count={starCount}
          value={Number(rating)}
          edit={isStarEditable}
          size={starSize}
          color={starColor}
          activeColor={starActiveColor}
          isHalf={isStarHalf}
          onChange={onRatingChanged}
          emptyIcon={<EmptyIcon />}
          filledIcon={<FilledIcon />}
        />
      </div>
      <p className="rating_count">{ratingCount}</p>
    </RatingStarStyled>
  );
};

RatingStar.defaultProps = {
  rating: 4.5,
  starCount: 5,
  starSize: 30,
  starColor: "#f0f0f0",
  starActiveColor: "#ffbb44",
  isStarHalf: false,
  isStarEditable: true,
  isSimpleMode: false,
  attendantCount: 0,
  EmptyIcon: () => <StarIcon width={24} height={24} style={{ color: "#f0f0f0" }} />,
  FilledIcon: () => <StarIcon width={24} height={24} style={{ color: "#ffbb44" }} />,
};

export default RatingStar;
