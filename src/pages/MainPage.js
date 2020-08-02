import React from "react";
import Modal from "../components/Modal/Modal";
import RatingStar from "../components/RatingStar/RatingStar";
import HeaderContainer from "../containers/HeaderContainer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer hasBackgroundColor={true} hasBackButton={false} hasShareButton={false} hasMapButton={true} hasLocalText={false} hasNaviBox={true} />
      <RatingStar starCount={5} rating={1} starSize={30} isStarHalf={true} />
      <RatingStar starCount={1} isStarEditable={false} starSize={15} attendantCount={30} isSimpleMode={true} />
      <RatingStar starCount={1} isStarEditable={false} starSize={15} isSimpleMode={true} />
      <Modal />
    </>
  );
};

export default MainPage;
