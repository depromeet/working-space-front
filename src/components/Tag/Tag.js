import React, { useCallback } from "react";
import TagStyled from "./Tag.styles";
import { ReactComponent as ConcentIcon } from "../../images/icon-concent.svg";
import { ReactComponent as MuteIcon } from "../../images/icon-mute.svg";
import { ReactComponent as ParkingIcon } from "../../images/icon-parking.svg";
import { ReactComponent as WifiIcon } from "../../images/icon-wifi.svg";
import { ReactComponent as ToiletIcon } from "../../images/icon-toilet.svg";
import { ReactComponent as ChairIcon } from "../../images/icon-chair.svg";
import { ReactComponent as TwentyFourIcon } from "../../images/icon-24-h.svg";
import { ReactComponent as TimerIcon } from "../../images/icon-timer.svg";
import { ReactComponent as StudyIcon } from "../../images/icon-study.svg";
import { ReactComponent as DessertIcon } from "../../images/icon-dessert.svg";
import { ReactComponent as SmokingIcon } from "../../images/icon-smoking.svg";
import { ReactComponent as SeatIcon } from "../../images/icon-seat.svg";

const tagIcons = {
  concent: <ConcentIcon />,
  mute: <MuteIcon />,
  parking: <ParkingIcon />,
  toilet: <ToiletIcon />,
  twentyFour: <TwentyFourIcon />,
  study: <StudyIcon />,
  dessert: <DessertIcon />,
  smoking: <SmokingIcon />,
  timer: <TimerIcon />,
  seat: <SeatIcon />,
  wifi: <WifiIcon />,
  chair: <ChairIcon />,
};

const Tag = ({ tag, isSelectable, isSelected, onClick }) => {
  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  return (
    <TagStyled isSelectable={isSelectable} isSelected={isSelected}>
      <div className="tag" onClick={handleClick}>
        <span className="tag_icon">{tagIcons[tag.iconName]}</span>
        <span className="tag_text">{tag.text}</span>
      </div>
    </TagStyled>
  );
};

Tag.defaultProps = {
  tag: { iconName: "concent", text: "콘센트가 많아요", follow: 11 },
  isSelectable: false,
  isSelected: false,
  onClick: null,
};

export default Tag;
