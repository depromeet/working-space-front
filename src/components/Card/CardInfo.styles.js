import styled from "styled-components";

const CardInfoStyled = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;

  .info-top {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
  }
  .card-title {
    font-size: 18px;
    font-weight: bold;
    padding-right: 5px;
    width: 100%;
  }

  .location {
    font-size: 12px;
  }
`;

export default CardInfoStyled;
