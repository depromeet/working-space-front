import React from "react";
import { isEmpty } from "lodash";
import CardInfoStyled from "./CardInfo.styles";
import { ReactComponent as SmallMarkIcon } from "../../images/icon-small-location-fill.svg";
import { ReactComponent as RatingIcon } from "../../images/icon-star-fill.svg";
import { ReactComponent as SmallTagIcon } from "../../images/icon-small-tag-fill.svg";
import TagList from "../Tag/TagList";

const CardInfo = props => {
  const { title, location, distance, rating, tags, hasMainShow, showOnlyInfo } = props;
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
              <span>{isEmpty(rating) ? "0.0" : rating}점</span>
            </p>
            <p className="card-tag-count">
              <SmallTagIcon />
              <span>태그 {isEmpty(tags) ? "0" : tags.length}개</span>
            </p>
          </div>
        )}

        <p className="location">{location}</p>
      </div>
      <TagList tags={tags} hasMainShow={hasMainShow} hasDropDownButton={false} isContraction={true} isShowCount={false} />
    </CardInfoStyled>
  );
};

CardInfo.defaultProps = {
  title: "Cafe",
  location: "Location",
  distance: "2.2km",
  rating: 0.0,
  tags: null,
  showOnlyInfo: false,
};

export default CardInfo;
