import React from "react";
import MapContainer from "../containers/MapContainer";
import HeaderContainer from "../containers/HeaderContainer";

const MapPage = () => {
  return (
    <>
      <HeaderContainer hasBackgroundColor={true} hasBackButton={true} hasShareButton={false} hasMapButton={false} hasLocalText={false} hasNaviBox={true} />
      <MapContainer />
    </>
  );
};

export default MapPage;
