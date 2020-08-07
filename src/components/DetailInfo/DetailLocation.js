import React from "react";
import DetailLocationStyled from "./DetailLocation.styles";

const DetailLocation = props => {
  const { mapUrl } = props;

  return (
    <DetailLocationStyled>
      <h2 className="location-title">위치</h2>
      <div className="location-map">{mapUrl}</div>
    </DetailLocationStyled>
  );
};

DetailLocation.defaultProps = {
  mapUrl: "",
};

export default DetailLocation;
