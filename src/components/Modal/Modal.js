import React, { useCallback, useState, useMemo } from "react";
import { spring, Motion } from "react-motion";
import ModalStyled from "./Modal.styles";

const Modal = props => {
  const { OpenButton, topPosition, shouldCloseOnDimmedClick } = props;
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const onClickOpen = useCallback(() => {
    setIsOpen(true);
    document.body.style = "position:fixed";
  }, []);

  const onClickClose = useCallback(() => {
    setIsOpen(false);
    document.body.style = "position:static";
  }, []);

  const onDimmedClick = useCallback(() => {
    shouldCloseOnDimmedClick && onClickClose();
  }, [shouldCloseOnDimmedClick, onClickClose]);

  return (
    <>
      <OpenButton onClick={onClickOpen} />
      {isOpen && (
        <ModalStyled>
          <Motion defaultStyle={{ top: window.innerHeight }} style={{ top: spring(topPosition, { stiffness: 330, damping: 30 }) }}>
            {style => (
              <div className="modal" style={{ top: style.top }}>
                {props.children({ onClickOpen, onClickClose, isOpen, setIsOpen })}
              </div>
            )}
          </Motion>
          <div className="dimmed" onClick={onDimmedClick} />
        </ModalStyled>
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
  topPosition: 160,
  shouldCloseOnDimmedClick: true,
  isOpen: false,
  children: () => "contents",
};

export default Modal;
