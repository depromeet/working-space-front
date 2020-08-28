import React, { useCallback } from "react";
import FloatingActionButtonStyled from "./FloatingActionButton.styles";

export default function FloatingActionButton(props) {
  const { children, onClick } = props;

  const handleGetCurrentCoordinates = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return <FloatingActionButtonStyled onClick={handleGetCurrentCoordinates}>{children}</FloatingActionButtonStyled>;
}

FloatingActionButton.defaultProps = {
  children: null,
  onClick: null,
};
