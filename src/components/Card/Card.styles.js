import styled from "styled-components";

const CardStyled = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 10px 0;
  &:first-of-type {
    margin-top: 0;
  }
`;

export default CardStyled;
