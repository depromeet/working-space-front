import React from "react";
import DetailLocationStyled from "./DetailLocation.styles";

const DetailLocation = props => {
  const { location } = props;

  return (
    <DetailLocationStyled>
      <h2 className="location-title">위치</h2>
      <div className="location-map"></div>
      <div className="location-text">{location}</div>
    </DetailLocationStyled>
  );
};

DetailLocation.defaultProps = {
  location: "서울 서초구 양재천로 131 4층",
};

export default DetailLocation;
