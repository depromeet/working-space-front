import styled, { css } from "styled-components";

export const Image = styled.div`
  height: 100%;
  .lazyload-wrapper {
    height: 100%;
    background: ${props => props.backgroundColor};
  }
  img {
    width: 100%;
    height: 100%;
  }
  .image_skeleton {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
