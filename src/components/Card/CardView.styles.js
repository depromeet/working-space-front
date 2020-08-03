import styled from "styled-components";

const CardViewStyled = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;

  .distance {
    position: absolute;
    right: 11px;
    bottom: 13px;
    font-size: 12px;
  }
`;

export default CardViewStyled;
