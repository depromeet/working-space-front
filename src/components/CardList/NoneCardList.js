import React from "react";
import NoneCardListStyled from "./NoneCardList.styles";

const NoneCardList = () => {
  return (
    <NoneCardListStyled>
      <div className="splash-gray"></div>
      <p>3km 이내 카페가 존재하지 않습니다.</p>
    </NoneCardListStyled>
  );
};

export default NoneCardList;
