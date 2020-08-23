import styled from "styled-components";

const CARD_HEIGHT = "100%";
const CARD_IN_MAP_HEIGHT = "148px";

const CardStyled = styled.div`
  width: 100%;
  height: ${props => (props.showOnlyInfo ? CARD_IN_MAP_HEIGHT : CARD_HEIGHT)};
  display: flex;
  flex-direction: column;
  margin: ${props => (props.showOnlyInfo ? "0" : "32px 0")};
  padding: ${props => (props.showOnlyInfo ? "16px" : "0")};
  box-sizing: border-box;
  &:first-of-type {
    margin-top: 0;
  }
  box-shadow: ${props => (props.showOnlyInfo ? "0 -1px 3px 0 rgba(0, 0, 0, 0.3)" : "0")};
  z-index: 1;
`;

export default CardStyled;
