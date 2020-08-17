import styled from "styled-components";

const DetailInfoStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  .info-title {
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
  }
  .info-text {
    width: 100%;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }
  .info-text > p {
    font-size: 12px;
    line-height: 16px;
    padding: 6px 0;
  }
  .info-text > p > span {
    width: 77px;
    height: 100%;
    display: inline-flex;
    color: #a7a7a7;
  }
  .info-hours {
    display: flex;
    justify-content: flex-start;
    font-size: 12px;
    line-height: 16px;
    padding: 6px 0;
  }
  .info-hours > span {
    width: 77px;
    height: 100%;
    display: inline-flex;
    color: #a7a7a7;
  }
  .info-hours-box > p {
    margin-top: 8px;
    &:first-child {
      margin: 0;
    }
  }
`;

export default DetailInfoStyled;
