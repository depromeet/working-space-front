import React, { useEffect } from "react";
import HeaderContainer from "../containers/HeaderContainer";
import DetailContainer from "../containers/DetailContainer";

const DetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderContainer hasBackButton={true} hasShareButton={true} hasMapButton={false} hasLocalText={false} hasLocationButton={false} />
      <DetailContainer hasMainShow={false} />
    </>
  );
};

export default DetailPage;
