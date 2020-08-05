import React from "react";
import FloatingActionButtonStyled from "./FloatingActionButton.styles";

export default function FloatingActionButton(props) {
  const { children, onGetCurrentCoordinates } = props;

  return <FloatingActionButtonStyled onClick={() => onGetCurrentCoordinates()}>{children}</FloatingActionButtonStyled>;
}

FloatingActionButton.defaultProps = {
  children: null,
  onGetCurrentCoordinates: null,
};
