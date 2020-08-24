import React, { useCallback } from "react";
import FloatingActionButtonStyled from "./FloatingActionButton.styles";

export default function FloatingActionButton(props) {
  const { children } = props;

  const handleGetCurrentCoordinates = useCallback(() => {
    props.onClick && props.onClick();
  }, []);

  return <FloatingActionButtonStyled onClick={handleGetCurrentCoordinates}>{children}</FloatingActionButtonStyled>;
}

FloatingActionButton.defaultProps = {
  children: null,
  onClick: null,
};
