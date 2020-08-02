import React, { useCallback } from "react";
import HeaderStyled from "./Header.styles";

const Header = props => {
  const { localTitle, hasBackgroundColor, hasBackButton, hasShareButton, hasMapButton, hasLocalText, hasNaviBox } = props;

  const onLocationButtonClick = useCallback(() => {
    props.onLocationButtonClick && props.onLocationButtonClick();
  }, [props.onLocationButtonClick]);

  return (
    <HeaderStyled hasBackgroundColor={hasBackgroundColor}>
      <div className="left-box">
        {hasBackButton && <button className="back-btn">&lt;</button>}
        {hasLocalText && <p className="navi-text">{localTitle}</p>}
        {hasNaviBox && (
          <div className="navi-box">
            <p className="navi-text">{localTitle}</p>
            <button className="navi-btn" onClick={onLocationButtonClick}>
              P
            </button>
          </div>
        )}
      </div>
      <div className="right-box">
        {hasShareButton && <button className="share-btn">L</button>}
        {hasMapButton && <button className="map-btn">M</button>}
      </div>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  localTitle: "현위치: 서울 서초구 양재천로 131",
  hasBackgroundColor: true,
  hasBackButton: false,
  hasShareButton: true,
  hasMapButton: false,
  hasLocalText: false,
  hasNaviBox: true,
};

export default Header;
