import styled from "styled-components";

const HEADER_HEIGHT = "50px";

const HeaderStyled = styled.div`
  width: 100%;
  min-height: ${HEADER_HEIGHT};
  max-height: ${HEADER_HEIGHT};

  .fixed_area {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${HEADER_HEIGHT};
    border-bottom: 1px solid #cccccc;
    background-color: #fff;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0 auto;
  }
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
