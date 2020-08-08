import styled from "styled-components";

const CardInfoStyled = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 13px;

  .info-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    color: #222222;
  }
  .card-title {
    font-size: 18px;
    font-weight: bold;
    padding-right: 5px;
    width: 100%;
  }
  .distance {
    font-size: 12px;
    line-height: 1.33;
    text-align: right;
  }

  .location {
    font-size: 11px;
    font-weight: 14px;
    color: #a7a7a7;
  }
`;

export default CardInfoStyled;
