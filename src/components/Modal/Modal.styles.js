import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: ${props => props.top || 0};
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  padding-top: 70px;
  z-index: 3;

  .modal {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 10000;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-sizing: border-box;
  }

  .header_left {
    display: flex;
    width: 33.3%;
  }

  .header_center {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .header_right {
    display: flex;
    justify-content: flex-end;
    width: 33.3%;
  }

  .contents {
    background: orange;
    flex: 1;
    padding: 16px;
    background: white;
  }

  .submit_button {
    width: 100%;
    height: 60px;
    background: #e0e0e0;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const OpenButton = styled.button`
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffbb44;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  color: #fff;
`;
