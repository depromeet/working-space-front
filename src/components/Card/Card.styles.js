import styled from "styled-components";

const CardStyled = styled.div`
  width: 100%;
  height: 256px;
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  &:first-of-type {
    margin-top: 0;
  }
`;

export default CardStyled;
