import React, { Suspense } from "react";
import LazyLoad from "react-lazyload";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Img } from "react-image";
import * as styled from "./Image.styles";
import NoneImage from "../NoneImage/NoneImage";

const ImagePlaceHolder = () => {
  return (
    <SkeletonTheme>
      <Skeleton className="image_skeleton" />
    </SkeletonTheme>
  );
};

const Image = ({ backgroundColor, offset, src, alt, ...props }) => {
  return (
    <styled.Image backgroundColor={backgroundColor}>
      <LazyLoad offset={offset} once>
        <Img src={src} alt={alt} loader={<ImagePlaceHolder />} unloader={<NoneImage />} />
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
