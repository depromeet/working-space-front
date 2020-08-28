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
  .info-item {
    font-size: 12px;
    line-height: 16px;
    padding: 6px 0;
  }
  .info-item-title {
    width: 77px;
    height: 100%;
    display: inline-flex;
    color: #a7a7a7;
    font-size: inherit;
  }
  .info-hours {
    display: flex;
    justify-content: flex-start;
    font-size: 12px;
    line-height: 16px;
    padding: 6px 0;
  }
  .info-hours-paragraph {
    margin-top: 8px;
    font-size: inherit;
    &:first-child {
      margin: 0;
    }
  }
`;

export default DetailInfoStyled;
