import styled from "styled-components";

const HEADER_HEIGHT = "50px";
const CARD_INFO_HEIGHT = "148px";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const MapStyled = styled.div`
  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT} - ${props => (props.isSelected ? CARD_INFO_HEIGHT : "0px")}); /* Fallback */
  height: calc((var(--vh, 1vh) * 100) - ${HEADER_HEIGHT} - ${props => (props.isSelected ? CARD_INFO_HEIGHT : "0px")});
  position: relative;

  #map {
    width: 100%;
    height: 100%;
  }
`;

export default MapStyled;
