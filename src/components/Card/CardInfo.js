import React from "react";
import CardInfoStyled from "./CardInfo.styles";
import { ReactComponent as SmallMarkIcon } from "../../images/icon-small-location-fill.svg";
import { ReactComponent as RatingIcon } from "../../images/icon-star-fill.svg";
import { ReactComponent as SmallTagIcon } from "../../images/icon-small-tag-fill.svg";
import TagList from "../Tag/TagList";

const CardInfo = props => {
  const { title, location, distance, rating, tagCount, hasMainShow, showOnlyInfo } = props;

  return (
    <CardInfoStyled showOnlyInfo={showOnlyInfo}>
      <div className="card-info">
        <div className="info-top">
          <h2 className="card-title">{title}</h2>
          <div className="distance">
            <SmallMarkIcon />
            <span>{distance}</span>
          </div>
        </div>

        {showOnlyInfo && (
          <div className="info-middle">
            <p className="card-rating">
              <RatingIcon />
              <span>{rating}점</span>
            </p>
            <p className="card-tag-count">
              <SmallTagIcon />
              <span>태그 {tagCount}개</span>
            </p>
          </div>
        )}

        <p className="location">{location}</p>
      </div>
      <TagList hasMainShow={hasMainShow} isContraction={true} isShowFollow={false} />
    </CardInfoStyled>
  );
};

CardInfo.defaultProps = {
  title: "Cafe",
  location: "Location",
  distance: "2.2km",
  rating: 4.5,
  tagCount: 5,
  showOnlyInfo: false,
};

export default CardInfo;
