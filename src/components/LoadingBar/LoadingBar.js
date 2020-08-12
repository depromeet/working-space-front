import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LoadingBarStyled from "./LoadingBar.styles";
import { ReactComponent as LoadingIcon } from "../../images/icon-loading-bar.svg";

const LoadingBar = () => {
  return (
    <LoadingBarStyled>
      {/* <LoadingIcon /> */}
      <SkeletonTheme>
        <Skeleton height={160} />
        <h4 className="card-title">
          <Skeleton height={34} />
        </h4>
        <p className="card-tag">
          <Skeleton height={32} width={`70%`} />
        </p>
      </SkeletonTheme>
    </LoadingBarStyled>
  );
};

export default LoadingBar;
