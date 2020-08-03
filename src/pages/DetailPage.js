import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import SwipeContainer from "../containers/SwipeContainer";

const DetailPage = () => {
  return (
    <>
      <HeaderContainer hasBackgroundColor={false} hasBackButton={true} hasShareButton={true} hasMapButton={false} hasLocalText={false} hasNaviBox={false} />
      <SwipeContainer />
    </>
  );
};

export default DetailPage;
