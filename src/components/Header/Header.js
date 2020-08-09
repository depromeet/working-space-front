import React, { useCallback } from "react";
import HeaderStyled from "./Header.styles";
import { ReactComponent as BackIcon } from "../../images/icon-back.svg";
import { ReactComponent as MapIcon } from "../../images/icon-map.svg";
import { ReactComponent as LocationIcon } from "../../images/icon-locate.svg";

const Header = props => {
  const { title, hasBackButton, hasShareButton, hasMapButton, hasLocalText, hasLocationButton } = props;

  const handleLocationButtonClick = useCallback(() => {
    props.onLocationButtonClick && props.onLocationButtonClick();
  }, [props.onLocationButtonClick]);

  const handleBackButtonClick = useCallback(() => {
    props.onBackButtonClick && props.onBackButtonClick();
  }, [props.onBackButtonClick]);

  const handleMapLinkButtonClick = useCallback(() => {
    props.onMapLinkButtonClick && props.onMapLinkButtonClick();
  }, [props.onMapLinkButtonClick]);

  const handleShareButtonClick = useCallback(() => {
    props.onShareButtonClick && props.onShareButtonClick();
  }, [props.onShareButtonClick]);

  return (
    <HeaderStyled>
      <div className="left-box">
        {hasBackButton && (
          <button className="back-btn" onClick={handleBackButtonClick}>
            <BackIcon />
          </button>
        )}
        {hasLocalText && <p className="navi-text">현위치: {title}</p>}
      </div>
      <div className="right-box">
        {hasLocationButton && (
          <button className="navi-btn" onClick={handleLocationButtonClick}>
            <LocationIcon />
          </button>
        )}
        {hasShareButton && (
          <button className="share-btn" onClick={handleShareButtonClick}>
            L
          </button>
        )}
        {hasMapButton && (
          <div className="map-btn-box">
            <div className="map-btn-left-line"></div>
            <button className="map-btn" onClick={handleMapLinkButtonClick}>
              <MapIcon />
            </button>
          </div>
        )}
      </div>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  title: "서울 서초구 양재천로 131",
  hasBackButton: false,
  hasShareButton: true,
  hasMapButton: false,
  hasLocalText: false,
  hasLocationButton: true,
};

export default Header;
