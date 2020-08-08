import React from "react";
import MapContainer from "../containers/MapContainer";
import HeaderContainer from "../containers/HeaderContainer";

const MapPage = () => {
  return (
    <>
      <HeaderContainer hasBackButton={true} hasShareButton={false} hasMapButton={false} hasLocalText={true} hasLocationButton={false} />
      <MapContainer />
    </>
  );
};

export default MapPage;
