import React from "react";
import DetailInfoStyled from "./DetailInfo.styles";

const DetailInfo = props => {
  const { location, hours, closed, number } = props;

  return (
    <DetailInfoStyled>
      <h2 className="info-title">기본정보</h2>
      <div className="info-text">
        <p>
          <span>주소</span>
          {location}
        </p>
        <div className="info-hours">
          <span>영업시간</span>
          <div className="info-hours-box">
            {hours?.map((h, i) => (
              <p key={i}>{h}</p>
            ))}
          </div>
        </div>
        <p>
          <span>휴무일</span>
          {closed}
        </p>
        <p>
          <span>전화번호</span>
          {number}
        </p>
      </div>
    </DetailInfoStyled>
  );
};

DetailInfo.defaultProps = {
  location: "서울 서초구 양재천로 131 4층",
  // hours: ["매일 09:00 - 23:00"],
  hours: ["평일 09:00 - 23:00", "주말 10:00 - 23:00"],
  closed: "매월 둘째주 일요일",
  number: "02-578-2737",
};

export default DetailInfo;
