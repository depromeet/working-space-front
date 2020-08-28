import React, { useCallback, useState, useEffect } from "react";
import { spring, Motion } from "react-motion";
import * as styled from "./Modal.styles";

const Modal = props => {
  const { OpenButton, shouldCloseOnDimmedClick } = props;
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [topPosition, setTopPosition] = useState(window.outerHeight);

  useEffect(() => {
    setTopPosition(props.topPosition);
  }, [props.topPosition]);

  const disableBackScroll = useCallback(() => {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
  }, []);

  const enableBackScroll = useCallback(() => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  }, []);

  const onClickOpen = useCallback(() => {
    disableBackScroll();
    setIsOpen(true);
  }, [disableBackScroll]);

  const onClickClose = useCallback(() => {
    enableBackScroll();
    setIsOpen(false);
  }, [enableBackScroll]);

  const onDimmedClick = useCallback(() => {
    shouldCloseOnDimmedClick && onClickClose();
  }, [shouldCloseOnDimmedClick, onClickClose]);

  const defaultStyle = {
    top: isOpen ? window.outerHeight : topPosition,
  };

  const style = {
    top: spring(isOpen ? topPosition : window.outerHeight, { stiffness: 330, damping: 30 }),
  };

  return (
    <>
      <OpenButton onClick={onClickOpen} id="modal_open_button" />
      <styled.Modal isOpen={isOpen}>
        <Motion defaultStyle={defaultStyle} style={style}>
          {style => {
            const isClosed = style.top === window.outerHeight;
            return (
              <div className="modal" style={{ ...style, visibility: isClosed ? "hidden" : "visible" }}>
                {props.children({ onClickOpen, onClickClose, isOpen, setIsOpen })}
              </div>
            );
          }}
        </Motion>
        {isOpen && <div className="dimmed" onClick={onDimmedClick} />}
      </styled.Modal>
    </>
  );
};

Modal.defaultProps = {
  OpenButton: props => (
    <styled.OpenButton type="button" {...props}>
      작업공간으로 적절했나요?
    </styled.OpenButton>
  ),
  topPosition: 160,
  shouldCloseOnDimmedClick: true,
  isOpen: false,
  children: () => "contents",
};

export default Modal;
