import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import Header from "../components/Header/Header";
import useGeoLocation from "../hooks/useGeoLocation";

const HeaderContainer = props => {
  const { hasBackgroundColor, hasBackButton, hasShareButton, hasMapButton, hasLocalText, hasLocationButton } = props;
  const history = useHistory();
  const { CardStore } = useStore();
  const { currentCoordinates, currentAddress, fetch, isFetching } = useGeoLocation();

  const handleLocationButtonClick = useCallback(async () => {
    await fetch();
    CardStore.init();
    await CardStore.fetchCard();
  }, [fetch]);

  const handleBackButtonClick = useCallback(() => {
    history.goBack();
  }, []);

  const handleMapLinkButtonClick = useCallback(() => {
    history.push("/map");
  }, []);

  const handleShareButtonClick = useCallback(() => {
    const currentUrl = window.location.href;

    if (navigator.share === undefined) {
      console.log("지원하지 않는 브라우저입니다.");
    } else {
      navigator
        .share({
          title: "WebShare API",
          url: currentUrl,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    }
  }, []);

  return (
    <>
      <Header
        onLocationButtonClick={handleLocationButtonClick}
        onBackButtonClick={handleBackButtonClick}
        onMapLinkButtonClick={handleMapLinkButtonClick}
        onShareButtonClick={handleShareButtonClick}
        title={currentAddress}
        hasBackgroundColor={hasBackgroundColor}
        hasBackButton={hasBackButton}
        hasShareButton={hasShareButton}
        hasMapButton={hasMapButton}
        hasLocalText={hasLocalText}
        hasLocationButton={hasLocationButton}
        currentCoordinates={currentCoordinates}
        isFetching={isFetching}
      />
    </>
  );
};

export default observer(HeaderContainer);
