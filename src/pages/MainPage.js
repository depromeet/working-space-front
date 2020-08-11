import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import CardListContainer from "../containers/CardListContainer";
import ModalEvaluation from "../components/ModalEvaluation/ModalEvaluation";

const MainPage = () => {
  return (
    <>
      <HeaderContainer hasBackButton={false} hasShareButton={false} hasMapButton={true} hasLocalText={true} hasLocationButton={true} />
      <CardListContainer hasMainShow={true} />
      {/* <RatingStar starCount={5} rating={1} starSize={30} isStarHalf={true} />
      <RatingStar starCount={1} isStarEditable={false} starSize={15} attendantCount={30} isSimpleMode={true} />
      <RatingStar starCount={1} isStarEditable={false} starSize={15} isSimpleMode={true} />
      <Modal /> */}
    </>
  );
};

export default MainPage;
