import React, { useCallback, useState } from "react";
import { spring, Motion } from "react-motion";
import * as styled from "./Modal.styles";

const Modal = props => {
  const { OpenButton, CloseButton, title } = props;
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const onClickOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClickClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <OpenButton onClick={onClickOpen} />
      {isOpen && (
        <Motion defaultStyle={{ top: window.innerHeight }} style={{ top: spring(0, { stiffness: 330, damping: 30 }) }}>
          {style => (
            <styled.Modal style={{ top: style.top }}>
              <div className="header">
                <div className="header_left"></div>
                <div className="header_center">
                  <span>{title}</span>
                </div>
                <div className="header_right">
                  <CloseButton onClick={onClickClose}></CloseButton>
                </div>
              </div>
              <div className="contents">this is contents</div>
              <button type="button" className="submit_button">
                등록하기
              </button>
            </styled.Modal>
          )}
        </Motion>
      )}
    </>
  );
};

Modal.defaultProps = {
  OpenButton: props => (
    <styled.OpenButton type="button" {...props}>
      이 카페에 대한 평가를 남겨주세요
    </styled.OpenButton>
  ),
  CloseButton: props => (
    <button type="button" {...props}>
      닫기
    </button>
  ),
  title: "카페명",
  isOpen: false,
};

export default Modal;
