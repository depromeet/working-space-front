import React from "react";
import DetailTitleStyled from "./DetailTitle.styles";
import RatingStar from "../RatingStar/RatingStar";

const DetailTitle = props => {
  const { title, distance } = props;

  return (
    <DetailTitleStyled>
      <div className="top-left">
        <h2 className="info-title">{title}</h2>
        <RatingStar starCount={5} isStarEditable={false} starSize={24} attendantCount={30} />
      </div>
      <div className="top-right">{distance}</div>
    </DetailTitleStyled>
  );
};

DetailTitle.defaultProps = {
  title: "Cafe1",
  distance: "2.2km",
};

export default DetailTitle;
