import React, { Suspense } from "react";
import LazyLoad from "react-lazyload";
import { useImage } from "react-image";
import * as styled from "./Image.styles";
import NoneImage from "../NoneImage/NoneImage";

const LazyLoadImage = ({ backgroundColor, offset, alt, ...props }) => {
  const { src, error } = useImage({
    srcList: props.src,
  });

  return (
    <styled.Image>
      <LazyLoad offset={offset} once style={{ height: "100%" }}>
        {<img src={src} alt={alt} style={{ backgroundColor, width: "100%", height: "100%" }} />}
      </LazyLoad>
    </styled.Image>
  );
};

const Image = ({ backgroundColor, offset, alt, ...props }) => {
  return (
    <Suspense fallback={<NoneImage />}>
      <LazyLoadImage backgroundColor={backgroundColor} offset={offset} alt={alt} {...props} />
    </Suspense>
  );
};

Image.defaultProps = {
  src: "https://placehold.it/300x150",
  alt: "이미지",
  offset: 1000,
  backgroundColor: "#ccc",
};

export default Image;
