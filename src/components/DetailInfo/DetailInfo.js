import React from "react";
import DetailInfoStyled from "./DetailInfo.styles";

const DetailInfo = props => {
  const { address, hours, closed, phone } = props;
  const noneText = "정보없음";

  return (
    <DetailInfoStyled>
      <h2 className="info-title">기본정보</h2>
      <div className="info-text">
        <p>
          <span>주소</span>
          {typeof address === "undefined" || address === null || address === "" ? noneText : address}
        </p>
        <div className="info-hours">
          <span>영업시간</span>
          <div className="info-hours-box">{typeof hours === "undefined" || hours === null || hours === "" ? noneText : hours?.map((h, i) => <p key={i}>{h}</p>)}</div>
        </div>
        <p>
          <span>휴무일</span>
          {typeof closed === "undefined" || closed === null || closed === "" ? noneText : closed}
        </p>
        <p>
          <span>전화번호</span>
          {typeof phone === "undefined" || phone === null || phone === "" ? noneText : phone}
        </p>
      </div>
    </DetailInfoStyled>
  );
};

DetailInfo.defaultProps = {
  address: null,
  phone: null,
  // hours: ["평일 09:00 - 23:00", "주말 10:00 - 23:00"],
  hours: null,
  closed: null,
};

export default DetailInfo;
