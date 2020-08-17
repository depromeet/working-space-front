import React from "react";
import MapContainer from "../containers/MapContainer";
import HeaderContainer from "../containers/HeaderContainer";

const MapPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <HeaderContainer hasBackButton={true} hasShareButton={false} hasMapButton={false} hasLocalText={true} hasLocationButton={false} />
      <MapContainer />
    </div>
  );
};

export default MapPage;
