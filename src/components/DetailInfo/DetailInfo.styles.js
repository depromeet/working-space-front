import styled from "styled-components";

const DetailInfoStyled = styled.div`
  width: 100%;
  height: 180px;
  padding: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;

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
    display: inline-block;
    color: #a7a7a7;
  }
`;

export default DetailInfoStyled;
