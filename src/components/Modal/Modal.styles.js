import styled from "styled-components";

const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: ${props => props.top || 0};
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  padding-top: 70px;

  .header {
    display: flex;
    height: 50px;
    width: 100%;
    padding: 16px;
    background: white;
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

  .footer {
    padding: 16px;
    box-sizing: border-box;
    background: white;
  }

  .submit_button {
    height: 48px;
    background: #e0e0e0;
    width: 100%;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default ModalStyled;
