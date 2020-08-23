import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LoadingBarStyled from "./LoadingBar.styles";

const LoadingBar = props => {
  const { hasMainLoading } = props;
  return (
    <LoadingBarStyled>
      {hasMainLoading ? (
        <SkeletonTheme>
          <Skeleton height={160} />
          <h4 className="card-title">
            <Skeleton height={34} />
          </h4>
          <p className="card-tag">
            <Skeleton height={32} width={`70%`} />
          </p>
        </SkeletonTheme>
      ) : (
        <SkeletonTheme>
          <div className="detail-loading">
            <p className="card-box">
              <Skeleton height={`10vh`} />
            </p>
            <p className="card-box">
              <Skeleton height={`28vh`} />
            </p>
            <p className="card-box">
              <Skeleton height={`30vh`} />
            </p>
            <p className="card-box">
              <Skeleton height={`10vh`} />
            </p>
          </div>
        </SkeletonTheme>
      )}
    </LoadingBarStyled>
  );
};

export default LoadingBar;
