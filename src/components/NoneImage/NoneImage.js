import React from "react";
import * as styled from "./NoneImage.styles";
import { ReactComponent as PhotoNoneIcon } from "../../images/icon-photo-none.svg";

const NoneImage = () => {
  return (
    <styled.NoneImage>
      <PhotoNoneIcon />
      <p>불러올 수 있는 이미지가 없습니다.</p>
    </styled.NoneImage>
  );
};

export default NoneImage;
