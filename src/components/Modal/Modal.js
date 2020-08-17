import React, { useCallback, useState, useMemo, useRef, useEffect } from "react";
import { spring, Motion } from "react-motion";
import * as styled from "./Modal.styles";

const Modal = props => {
  const { OpenButton, shouldCloseOnDimmedClick } = props;
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [topPosition, setTopPosition] = useState(window.innerHeight);

  useEffect(() => {
    setTopPosition(props.topPosition);
  }, [props.topPosition]);

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
      <OpenButton onClick={onClickOpen} id="modal_open_button" />
      <styled.Modal>
        <Motion defaultStyle={{ top: isOpen ? window.innerHeight : topPosition }} style={{ top: spring(isOpen ? topPosition : window.innerHeight, { stiffness: 330, damping: 30 }) }}>
          {style => (
            <div className="modal" style={{ top: style.top }}>
              {props.children({ onClickOpen, onClickClose, isOpen, setIsOpen })}
            </div>
          )}
        </Motion>
        {isOpen && <div className="dimmed" onClick={onDimmedClick} />}
      </styled.Modal>
    </>
  );
};

Modal.defaultProps = {
  OpenButton: props => (
    <styled.OpenButton type="button" {...props}>
      작업 공간으로 적절했나요?
    </styled.OpenButton>
  ),
  topPosition: 160,
  shouldCloseOnDimmedClick: true,
  isOpen: false,
  children: () => "contents",
};

export default Modal;
