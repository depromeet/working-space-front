import React from "react";
import DetailTitleStyled from "./DetailTitle.styles";
import RatingStar from "../RatingStar/RatingStar";
import { ReactComponent as SmallMarkIcon } from "../../images/icon-small-location-fill.svg";
import { ReactComponent as SmallTagIcon } from "../../images/icon-small-tag-fill.svg";

const DetailTitle = props => {
  const { title, distance, tagCount } = props;

  return (
    <DetailTitleStyled>
      <div className="title-top">
        <h2 className="info-title">{title}</h2>
        <div className="icon-align">
          <SmallMarkIcon />
          <span>{distance}</span>
        </div>
      </div>
      <div className="title-bottom">
        <RatingStar starCount={5} isStarEditable={false} starSize={24} attendantCount={30} isSimpleMode={true} ratingTextColor="#ccc" ratingCurrentTextColor="#222" />
        <div className="icon-align">
          <SmallTagIcon style={{ color: "#222222" }} />
          <span>태그 {tagCount}개</span>
        </div>
      </div>
    </DetailTitleStyled>
  );
};

DetailTitle.defaultProps = {
  tagCount: 5,
  title: "Cafe1",
  distance: "2.2km",
};

export default DetailTitle;
