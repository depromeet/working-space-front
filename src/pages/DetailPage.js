import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import SwiperContainer from "../containers/SwiperContainer";
import DetailContainer from "../containers/DetailContainer";

const DetailPage = () => {
  return (
    <>
      <HeaderContainer hasBackgroundColor={false} hasBackButton={true} hasShareButton={true} hasMapButton={false} hasLocalText={false} hasNaviBox={false} />
      <SwiperContainer />
      <DetailContainer />
    </>
  );
};

export default DetailPage;
