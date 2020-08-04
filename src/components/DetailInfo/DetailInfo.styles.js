import styled from "styled-components";

const DetailInfoStyled = styled.div`
  width: 100%;
  height: 170px;
  border-bottom: 1px solid #f5f5f5;

  .info-top {
    width: 100%;
    line-height: 1.5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 15px;
  }
  .info-title {
    font-size: 18px;
    font-weight: bold;
  }
  .info-location {
    font-size: 11px;
    line-height: 15px;
  }
  .top-right {
    font-size: 11px;
    line-height: 15px;
  }

  .info-bottom {
    width: 100%;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
  .info-bottom > p {
    font-size: 12px;
    line-height: 16px;
    padding: 4px 0;
  }
  .info-bottom > p > span {
    font-weight: bold;
  }
`;

export default DetailInfoStyled;
