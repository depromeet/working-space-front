import React from "react";
import RatingStar from "../RatingStar/RatingStar";
import { ReactComponent as FilledStarIcon } from "../../images/icon-star-fill.svg";
import { ReactComponent as LineStarIcon } from "../../images/icon-star-line.svg";

const EmptyIcon = () => <LineStarIcon width={32} height={32} style={{ color: "#ccc" }} />;
const FilledIcon = () => <FilledStarIcon width={32} height={32} style={{ color: "#ffbb44" }} />;

const FirstStep = props => {
  const { onRatingChange, isActive } = props;
  return (
    <>
      <div className="rating">
        <RatingStar
          isVertical={true}
          rating={0}
          ratingTextSize={18}
          ratingCurrentTextColor={isActive ? "#ffbb44" : "#ccc"}
          isShowRatingTotal={true}
          isRatingInteger={true}
          starCount={5}
          rowStarGutter={8}
          isStarEditable={true}
          isShowAttendantCount={false}
          EmptyIcon={EmptyIcon}
          FilledIcon={FilledIcon}
          onRatingChanged={onRatingChange}
          isActive={isActive}
        />
      </div>
    </>
  );
};

export default FirstStep;
