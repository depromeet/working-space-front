import React from "react";
import HeaderContainer from "../containers/HeaderContainer";

const MapPage = () => {
  return (
    <>
      <HeaderContainer hasBackgroundColor={false} hasBackButton={true} hasShareButton={false} hasMapButton={false} hasLocalText={true} hasNaviBox={false} />
    </>
  );
};

export default MapPage;
