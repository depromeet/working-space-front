import styled from "styled-components";

const FloatingActionButtonStyled = styled.button`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border-radius: 24px;
  z-index: 999;
  cursor: pointer;
  outline: none;
`;

export default FloatingActionButtonStyled;
