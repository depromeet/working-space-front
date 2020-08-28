import React, { useState, useEffect } from "react";
import { ReactComponent as LocationIcon } from "../../images/icon-locate.svg";
import { ReactComponent as LocationActiveIcon } from "../../images/icon-locate-active.svg";

const BlinkingLocationIcon = () => {
  const [isActiveIcon, setIsActiveIcon] = useState(false);
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsActiveIcon(prevState => {
        return !prevState;
      });
    }, 500);

    return function cleanup() {
      clearInterval(blinkInterval);
    };
  });

  return isActiveIcon ? <LocationActiveIcon /> : <LocationIcon />;
};

export default BlinkingLocationIcon;
