import React, { Suspense, memo } from "react";
import LazyLoad from "react-lazyload";
import { useImage } from "react-image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import * as styled from "./Image.styles";
import NoneImage from "../NoneImage/NoneImage";

const ReactImage = memo(({ alt, ...props }) => {
  const { src, error } = useImage({
    srcList: props.src,
  });

  return <styled.Image>{error ? <NoneImage /> : <img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />}</styled.Image>;
});

const Image = ({ offset, src, alt }) => {
  return (
    <LazyLoad offset={offset} once style={{ height: "100%" }}>
      <Suspense
        fallback={
          <SkeletonTheme>
            <Skeleton width="100%" height="100%" />
          </SkeletonTheme>
        }
      >
        <ReactImage src={src} alt={alt} />
      </Suspense>
    </LazyLoad>
  );
};

Image.defaultProps = {
  src: "https://placehold.it/300x150",
  alt: "이미지",
  offset: 1000,
};

export default memo(Image);
