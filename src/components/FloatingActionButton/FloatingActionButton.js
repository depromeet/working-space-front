import React, { useCallback } from "react";
import FloatingActionButtonStyled from "./FloatingActionButton.styles";

export default function FloatingActionButton(props) {
  const { children } = props;

  const handleGetCurrentCoordinates = useCallback(() => {
    props.onGetCurrentCoordinates && props.onGetCurrentCoordinates();
  }, []);

  return <FloatingActionButtonStyled onClick={handleGetCurrentCoordinates}>{children}</FloatingActionButtonStyled>;
}

FloatingActionButton.defaultProps = {
  children: null,
  onGetCurrentCoordinates: null,
};
