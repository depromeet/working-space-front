import React from "react";
import MapStyled from "./Map.styles";

export default function Map(props) {
  const { mapRef } = props;
  return (
    <MapStyled>
      <div id="map" ref={mapRef} />
    </MapStyled>
  );
}

Map.defaultProps = {
  mapRef: null,
};
