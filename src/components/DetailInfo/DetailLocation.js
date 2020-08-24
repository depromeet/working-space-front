import React from "react";
import DetailLocationStyled from "./DetailLocation.styles";

const DetailLocation = props => {
  const { mapRef, latitude, longitude } = props;

  return (
    <DetailLocationStyled>
      <h2 className="location-title">위치</h2>

      <a href={`kakaomap://route?ep=${latitude},${longitude}&by=FOOT`}>
        <div className="location-map" ref={mapRef}></div>
      </a>
    </DetailLocationStyled>
  );
};

DetailLocation.defaultProps = {
  mapRef: null,
  latitude: null,
  longitude: null,
};

export default DetailLocation;
