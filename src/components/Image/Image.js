import React from "react";
import LazyLoad from "react-lazyload";
import * as styled from "./Image.styles";

const Image = ({ src, alt, offset, backgroundColor }) => {
  return (
    <styled.Image>
      <LazyLoad offset={offset} once style={{ height: "100%" }}>
        <img src={src} alt={alt} style={{ backgroundColor, width: "100%", height: "100%" }} />
      </LazyLoad>
    </styled.Image>
  );
};

Image.defaultProps = {
  src: "https://placehold.it/300x150",
  alt: "이미지",
  offset: 1000,
  backgroundColor: "#ccc",
};

export default Image;
