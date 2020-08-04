import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import SwiperContainer from "../containers/SwiperContainer";

const DetailPage = () => {
  return (
    <>
      <HeaderContainer hasBackgroundColor={false} hasBackButton={true} hasShareButton={true} hasMapButton={false} hasLocalText={false} hasNaviBox={false} />
      <SwiperContainer />
    </>
  );
};

export default DetailPage;
