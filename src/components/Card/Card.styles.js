import styled from "styled-components";

const CARD_HEIGHT = "256px";
const CARD_IN_MAP_HEIGHT = "148px";

const CardStyled = styled.div`
  width: 100%;
  height: ${props => (props.isInMap ? CARD_IN_MAP_HEIGHT : CARD_HEIGHT)};
  display: flex;
  flex-direction: column;
  margin: ${props => (props.isInMap ? "0" : "32px 0")};
  padding: ${props => (props.isInMap ? "16px" : "0")};
  box-sizing: border-box;
  &:first-of-type {
    margin-top: 0;
  }
`;

export default CardStyled;
