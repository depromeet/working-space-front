import React from "react";
import { isEmpty } from "lodash";
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
          {isEmpty(address) ? noneText : address}
        </p>
        <div className="info-hours">
          <span>영업시간</span>
          <div className="info-hours-box">{isEmpty(hours) ? noneText : hours?.map((h, i) => <p key={i}>{h}</p>)}</div>
        </div>
        <p>
          <span>휴무일</span>
          {isEmpty(closed) ? noneText : closed}
        </p>
        <p>
          <span>전화번호</span>
          {isEmpty(phone) ? noneText : phone}
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
