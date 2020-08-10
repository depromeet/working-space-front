import styled, { css } from "styled-components";

const activeCss = css`
  .footer_button {
    background: #ffbb44;
    color: white;
  }
`;

export const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  color: #222;
  height: 100%;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 32px;
  }
  .main_title {
    font-size: 18px;
    font-weight: bold;
  }
  .sub_title {
    font-size: 14px;
    margin-top: 8px;
  }
  .footer {
    width: 100%;
  }
  .footer_button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    font-size: 14px;
    outline: none;
    background: #ccc;
    color: #222;
  }
  ${({ isActive }) => isActive && activeCss}
`;
