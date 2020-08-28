/* eslint-disable no-nested-ternary */
import React, { useCallback, useRef } from "react";
import HeaderStyled from "./Header.styles";
import { ReactComponent as BackIcon } from "../../images/icon-back.svg";
import { ReactComponent as MapIcon } from "../../images/icon-map.svg";
import { ReactComponent as LocationIcon } from "../../images/icon-locate.svg";
import { ReactComponent as LocationActiveIcon } from "../../images/icon-locate-active.svg";
import { ReactComponent as ShareIcon } from "../../images/icon-share.svg";
import BlinkingLocationIcon from "../BlinkingLocationIcon/BlinkingLocationIcon";

const Header = props => {
  const {
    title,
    hasBackButton,
    hasShareButton,
    hasMapButton,
    hasLocalText,
    hasLocationButton,
    currentCoordinates,
    isFetching,
    isLoadingFetchCard,
    isCardDatasEmpty,
    onLocationButtonClick,
    onBackButtonClick,
    onMapLinkButtonClick,
    onShareButtonClick,
  } = props;
  const headerRef = useRef();

  const handleLocationButtonClick = useCallback(() => {
    onLocationButtonClick && onLocationButtonClick();
  }, [onLocationButtonClick]);

  const handleBackButtonClick = useCallback(() => {
    onBackButtonClick && onBackButtonClick();
  }, [onBackButtonClick]);

  const handleMapLinkButtonClick = useCallback(() => {
    onMapLinkButtonClick && onMapLinkButtonClick();
  }, [onMapLinkButtonClick]);

  const handleShareButtonClick = useCallback(() => {
    onShareButtonClick && onShareButtonClick();
  }, [onShareButtonClick]);

  return (
    <HeaderStyled ref={headerRef}>
      <div className="fixed_area">
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
              {!currentCoordinates || isFetching ? <LocationIcon /> : isCardDatasEmpty && isLoadingFetchCard ? <BlinkingLocationIcon /> : <LocationActiveIcon />}
            </button>
          )}
          {hasShareButton && (
            <button className="share-btn" onClick={handleShareButtonClick}>
              <ShareIcon />
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
  hasLocationActiveButton: false,
  isFetching: false,
  isLoadingFetchCard: false,
  isCardDatasEmpty: false,
};

export default Header;
