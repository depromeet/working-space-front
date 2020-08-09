import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  margin: 0 auto;
  z-index: 2;
  background-color: #fff;
  border-bottom: 1px solid #cccccc;

  button {
    background-color: #fff;
  }
  .left-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .back-btn {
    width: 24px;
    height: 24px;
    margin-left: 16px;
  }
  .navi-text {
    font-size: 14px;
    line-height: 1.43;
    color: #a7a7a7;
    margin-left: 16px;
  }

  .right-box {
    width: 81px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 16px;
  }
  .navi-btn {
    width: 24px;
    height: 24px;
    flex: none;
    margin-right: 16px;
  }
  .map-btn-box {
    width: 41px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .map-btn {
    width: 24px;
    height: 24px;
  }
  .map-btn-left-line {
    width: 1px;
    height: 16px;
    background-color: #cccccc;
  }
  .share-btn {
    width: 24px;
    height: 24px;
  }
`;

export default HeaderStyled;
