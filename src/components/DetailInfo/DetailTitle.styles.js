import styled from "styled-components";

const DetailInfoStyled = styled.div`
  width: 100%;
  height: 106px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  padding-top: 32px;
  box-sizing: border-box;

  .info-title {
    font-size: 18px;
    line-height: 26px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .top-right {
    font-size: 12px;
    line-height: 16px;
  }
`;

export default DetailInfoStyled;
