import React, { useRef, useEffect } from "react";
import MapContainer from "../containers/MapContainer";
import HeaderContainer from "../containers/HeaderContainer";

const MapPage = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    wrapperRef.current.style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }} ref={wrapperRef}>
      <HeaderContainer hasBackButton={true} hasShareButton={false} hasMapButton={false} hasLocalText={true} hasLocationButton={false} />
      <MapContainer style={{ flex: 1 }} />
    </div>
  );
};

export default MapPage;
