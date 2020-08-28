import React from "react";
import { isEmpty } from "lodash";
import DetailTitleStyled from "./DetailTitle.styles";
import RatingStar from "../RatingStar/RatingStar";
import { ReactComponent as SmallMarkIcon } from "../../images/icon-small-location-fill.svg";
import { ReactComponent as SmallTagIcon } from "../../images/icon-small-tag-fill.svg";

const DetailTitle = props => {
  const { name, distance, rating, tagCount } = props;
  const noneText = "-";

  return (
    <DetailTitleStyled>
      <div className="title-top">
        <h2 className="info-title">{isEmpty(name) ? noneText : name}</h2>
        <div className="icon-align">
          <SmallMarkIcon />
          <span>{isEmpty(distance) ? noneText : distance}</span>
        </div>
      </div>
      <div className="title-bottom">
        <RatingStar rating={rating} starCount={5} isStarEditable={false} starSize={24} attendantCount={0} isSimpleMode={true} ratingTextColor="#ccc" ratingCurrentTextColor="#222" />
        <div className="icon-align">
          <SmallTagIcon style={{ color: "#222222" }} />
          <span>태그 {tagCount}개</span>
        </div>
      </div>
    </DetailTitleStyled>
  );
};

DetailTitle.defaultProps = {
  id: "Cafe",
  distance: "0km",
  rating: 0.0,
  tagCount: 10,
};

export default DetailTitle;
