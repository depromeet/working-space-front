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
    box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.2);
    z-index: 10000;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    overflow: hidden;
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
  z-index: 1;
`;
