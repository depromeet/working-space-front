import React, { useCallback } from "react";
import HeaderStyled from "./Header.styles";

const Header = props => {
  const { localData, backColor, backBtn, shareBtn, mapBtn, localText, naviBox } = props;

  const handleNavClick = useCallback(() => {
    props.handleNavClick && props.handleNavClick();
  }, [props]);

  return (
    <HeaderStyled backColor={backColor}>
      <div className="left-box">
        {backBtn ? <button className="back-btn">&lt;</button> : null}
        {localText ? <p className="navi-text">{localData.title}</p> : null}
        {naviBox ? (
          <div className="navi-box">
            <p className="navi-text">{localData.title}</p>
            <button className="navi-btn" onClick={handleNavClick}>
              P
            </button>
          </div>
        ) : null}
      </div>
      <div className="right-box">
        {shareBtn ? <button className="share-btn">L</button> : null}
        {mapBtn ? <button className="map-btn">M</button> : null}
      </div>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  localData: { title: "현위치: 서울 서초구 양재천로 131" },
  backColor: true,
  backBtn: false,
  shareBtn: true,
  mapBtn: false,
  localText: false,
  naviBox: true,
};

export default Header;
