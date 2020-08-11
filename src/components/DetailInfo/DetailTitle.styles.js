import styled from "styled-components";

const DetailTitleStyled = styled.div`
  width: 100%;
  height: 106px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  padding-top: 32px;
  box-sizing: border-box;

  .title-top {
    width: 100%;
    height: 26px;
    padding-bottom: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .info-title {
    font-size: 18px;
    line-height: 26px;
    font-weight: bold;
  }
  .title-bottom {
    width: 100%;
    height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .icon-align {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    line-height: 1.33;
  }
  .icon-align > span {
    margin-left: 4px;
  }
`;

export default DetailTitleStyled;
