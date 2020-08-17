import React from "react";
import styled from "styled-components";
import MapContainer from "../containers/MapContainer";
import HeaderContainer from "../containers/HeaderContainer";

const MapPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MapPage = () => {
  return (
    <MapPageWrapper>
      <HeaderContainer hasBackButton={true} hasShareButton={false} hasMapButton={false} hasLocalText={true} hasLocationButton={false} />
      <MapContainer />
    </MapPageWrapper>
  );
};

export default MapPage;
