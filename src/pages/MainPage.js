import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import CardListContainer from "../containers/CardListContainer";
import ModalEvaluation from "../components/ModalEvaluation/ModalEvaluation";

const MainPage = () => {
  return (
    <>
      <HeaderContainer hasBackButton={false} hasShareButton={false} hasMapButton={true} hasLocalText={true} hasLocationButton={true} />
      <ModalEvaluation />
      <CardListContainer />
    </>
  );
};

export default MainPage;
