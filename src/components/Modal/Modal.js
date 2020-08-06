import React, { useCallback, useState } from "react";
import { spring, Motion } from "react-motion";
import ModalStyled from "./Modal.styles";

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
        <Motion defaultStyle={{ top: 900 }} style={{ top: spring(0, { stiffness: 120, damping: 17 }) }}>
          {style => (
            <ModalStyled top={style.top}>
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
              <div className="footer">
                <button type="button" className="submit_button">
                  완료
                </button>
              </div>
            </ModalStyled>
          )}
        </Motion>
      )}
    </>
  );
};

Modal.defaultProps = {
  OpenButton: props => (
    <button type="button" {...props}>
      열기
    </button>
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
