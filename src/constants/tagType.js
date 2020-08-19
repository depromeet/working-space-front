import React from "react";
import { ReactComponent as ConcentIcon } from "../images/icon-concent.svg";
import { ReactComponent as MuteIcon } from "../images/icon-mute.svg";
import { ReactComponent as ParkingIcon } from "../images/icon-parking.svg";
import { ReactComponent as WifiIcon } from "../images/icon-wifi.svg";
import { ReactComponent as ToiletIcon } from "../images/icon-toilet.svg";
import { ReactComponent as ChairIcon } from "../images/icon-chair.svg";
import { ReactComponent as TwentyFourIcon } from "../images/icon-24-h.svg";
import { ReactComponent as TimerIcon } from "../images/icon-timer.svg";
import { ReactComponent as StudyIcon } from "../images/icon-study.svg";
import { ReactComponent as DessertIcon } from "../images/icon-dessert.svg";
import { ReactComponent as SmokingIcon } from "../images/icon-smoking.svg";
import { ReactComponent as SeatIcon } from "../images/icon-seat.svg";

export const tagNameByType = {
  concent: "콘센트가 있는",
  mute: "분위기가 조용한",
  parking: "주차장이 있는",
  toilet: "화장실이 깨끗한",
  twentyFour: "24시간 열린",
  study: "스터디룸이 있는",
  dessert: "디저트가 다양한",
  smoking: "흡연구역이 마련된",
  timer: "시간제한이 있는",
  seat: "빈자리가 많은",
  wifi: "와이파이가 빠른",
  chair: "의자가 푹신한",
};

export const tagImageByType = {
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
