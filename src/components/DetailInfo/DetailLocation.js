/* global kakao */
import React, { useState, useRef, useCallback, useEffect } from "react";
import DetailLocationStyled from "./DetailLocation.styles";

const DetailLocation = props => {
  const { mapRef } = props;

  return (
    <DetailLocationStyled>
      <h2 className="location-title">위치</h2>
      <div className="location-map" ref={mapRef}></div>
    </DetailLocationStyled>
  );
};

DetailLocation.defaultProps = {
  mapRef: null,
};

export default DetailLocation;
