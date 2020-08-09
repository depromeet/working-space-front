import React from "react";
import CardInfoStyled from "./CardInfo.styles";
import { ReactComponent as SmallMarkIcon } from "../../images/icon-small-location-fill.svg";
import TagList from "../Tag/TagList";

const titleLength = title => {
  if (title.length > 25) {
    return <h2 className="card-title">{title.substr(0, 25)}...</h2>;
  }
  return <h2 className="card-title">{title}</h2>;
};

const CardInfo = props => {
  const { title, location, distance } = props;

  return (
    <CardInfoStyled>
      <div className="card-info">
        <div className="info-top">
          {titleLength(title)}
          <div className="distance">
            <SmallMarkIcon />
            <span>{distance}</span>
          </div>
        </div>
        <p className="location">{location}</p>
      </div>
      <TagList show={true} contraction={true} />
    </CardInfoStyled>
  );
};

CardInfo.defaultProps = {
  title: "Cafe",
  location: "Location",
  distance: "2.2km",
};

export default CardInfo;
