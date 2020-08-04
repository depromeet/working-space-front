import React, { useCallback } from "react";
import HeaderStyled from "./Header.styles";

const Header = props => {
  const { title, hasBackgroundColor, hasBackButton, hasShareButton, hasMapButton, hasLocalText, hasNaviBox } = props;

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
    <HeaderStyled hasBackgroundColor={hasBackgroundColor}>
      <div className="left-box">
        {hasBackButton && (
          <button className="back-btn" onClick={handleBackButtonClick}>
            &lt;
          </button>
        )}
        {hasLocalText && <p className="navi-text">{title}</p>}
        {hasNaviBox && (
          <div className="navi-box">
            <p className="navi-text">{title}</p>
            <button className="navi-btn" onClick={handleLocationButtonClick}>
              P
            </button>
          </div>
        )}
      </div>
      <div className="right-box">
        {hasShareButton && (
          <button className="share-btn" onClick={handleShareButtonClick}>
            L
          </button>
        )}
        {hasMapButton && (
          <button className="map-btn" onClick={handleMapLinkButtonClick}>
            M
          </button>
        )}
      </div>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  title: "현위치: 서울 서초구 양재천로 131",
  hasBackgroundColor: true,
  hasBackButton: false,
  hasShareButton: true,
  hasMapButton: false,
  hasLocalText: false,
  hasNaviBox: true,
};

export default Header;
