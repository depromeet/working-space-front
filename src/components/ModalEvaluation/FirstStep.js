import React from "react";
import RatingStar from "../RatingStar/RatingStar";
import { ReactComponent as FilledStarIcon } from "../../images/icon-star-fill.svg";
import { ReactComponent as LineStarIcon } from "../../images/icon-star-line.svg";
import { ReactComponent as HalfStarIcon } from "../../images/icon-star-half.svg";

const EmptyIcon = () => <LineStarIcon width={32} height={32} style={{ color: "#ccc" }} />;
const HalfIcon = () => <HalfStarIcon width={32} height={32} style={{ color: "#ffbb44" }} />;
const FilledIcon = () => <FilledStarIcon width={32} height={32} style={{ color: "#ffbb44" }} />;

const FirstStep = props => {
  const { onRatingChange, isActive } = props;
  return (
    <>
      <div className="rating">
        <RatingStar
          isVertical={true}
          isStarHalf={true}
          isStarEditable={true}
          isRatingInteger={true}
          isShowAttendantCount={false}
          isShowRatingTotal={true}
          isActive={isActive}
          rating={0}
          ratingTextSize={18}
          ratingCurrentTextColor={isActive ? "#ffbb44" : "#ccc"}
          starCount={5}
          rowStarGutter={8}
          EmptyIcon={EmptyIcon}
          HalfIcon={HalfIcon}
          FilledIcon={FilledIcon}
          onRatingChanged={onRatingChange}
        />
      </div>
    </>
  );
};

export default FirstStep;
