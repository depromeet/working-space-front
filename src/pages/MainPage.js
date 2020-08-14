import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import CardListContainer from "../containers/CardListContainer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer hasBackButton={false} hasShareButton={false} hasMapButton={true} hasLocalText={true} hasLocationButton={true} />
      <CardListContainer hasMainShow={true} />
    </>
  );
};

export default MainPage;
