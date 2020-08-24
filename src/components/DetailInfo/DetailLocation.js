import React from "react";
import DetailLocationStyled from "./DetailLocation.styles";
import isMobile from "../../utils/IsMobileUtils";

const DetailLocation = props => {
  const { mapRef, latitude, longitude, dataId } = props;

  return (
    <DetailLocationStyled>
      <h2 className="location-title">위치</h2>

      <a href={isMobile() ? `kakaomap://route?ep=${latitude},${longitude}&by=FOOT` : `https://map.kakao.com/link/to/${dataId}`}>
        <div className="location-map" ref={mapRef}></div>
      </a>
    </DetailLocationStyled>
  );
};

DetailLocation.defaultProps = {
  mapRef: null,
  latitude: null,
  longitude: null,
  dataId: null,
};

export default DetailLocation;
