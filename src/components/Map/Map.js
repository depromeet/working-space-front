import React from "react";
import MapStyled from "./Map.styles";

export default function Map(props) {
  const { mapRef, isSelected, children } = props;
  return (
    <MapStyled isSelected={isSelected}>
      <div id="map" ref={mapRef}>
        {children}
      </div>
    </MapStyled>
  );
}

Map.defaultProps = {
  mapRef: null,
  isSelected: false,
};
