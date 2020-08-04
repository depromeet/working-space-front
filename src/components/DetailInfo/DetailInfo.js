import React from "react";
import DetailInfoStyled from "./DetailInfo.styles";
import RatingStar from "../RatingStar/RatingStar";

const DetailInfo = props => {
  const { title, location, distance, hours, closed, number } = props;

  return (
    <DetailInfoStyled>
      <div className="info-top">
        <div className="top-left">
          <h2 className="info-title">{title}</h2>
          <p className="info-location">{location}</p>
        </div>
        <div className="top-right">{distance}</div>
      </div>
      <RatingStar starCount={5} isStarEditable={false} starSize={15} attendantCount={30} isSimpleMode={true} />
      <div className="info-bottom">
        <p>
          <span>영업시간: </span>
          {hours}
        </p>
        <p>
          <span>휴무일: </span>
          {closed}
        </p>
        <p>
          <span>전화번호: </span>
          {number}
        </p>
      </div>
    </DetailInfoStyled>
  );
};

DetailInfo.defaultProps = {
  title: "Cafe1",
  location: "서울 서초구 양재천로 131 4층",
  distance: "2.2km",
  hours: "매일 09:00 - 23:00",
  closed: "매월 둘째주 일요일",
  number: "02-578-2737",
};

export default DetailInfo;
