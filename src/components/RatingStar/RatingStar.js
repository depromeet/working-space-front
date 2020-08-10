import React, { useCallback, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { ReactComponent as StarIcon } from "../../images/icon-star-fill.svg";
import RatingStarStyled from "./RatingStar.styles";

const RatingStar = props => {
  const { starSize, starActiveColor, isStarHalf, starColor, isStarEditable, starCount, attendantCount, FilledIcon, EmptyIcon, isShowAttendantCount, attendantColor, ratingTextColor } = props;
  const [rating, setRating] = useState(parseFloat(props.rating).toFixed(1));

  const onRatingChanged = useCallback(newRating => {
    setRating(newRating);
    props.onRatingChanged && props.onRatingChanged();
  }, []);

  return (
    <RatingStarStyled attendantColor={attendantColor} ratingTextColor={ratingTextColor}>
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
      <p className="rating_info">
        <span className="rating_count">{rating}점</span>
        {isShowAttendantCount && <span className="rating_attendant_count">({attendantCount}명 참여)</span>}
      </p>
    </RatingStarStyled>
  );
};

RatingStar.defaultProps = {
  rating: 4.5,
  ratingTextColor: "#222",
  starCount: 5,
  starSize: 30,
  starColor: "#f0f0f0",
  starActiveColor: "#ffbb44",
  isStarHalf: false,
  isStarEditable: true,
  isShowAttendantCount: true,
  attendantCount: 0,
  attendantColor: "#ccc",
  EmptyIcon: () => <StarIcon width={24} height={24} style={{ color: "#f0f0f0" }} />,
  FilledIcon: () => <StarIcon width={24} height={24} style={{ color: "#ffbb44" }} />,
};

export default RatingStar;
