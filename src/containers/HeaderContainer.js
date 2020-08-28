import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import { isEmpty } from "lodash";
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
  }, [fetch, CardStore]);

  const handleBackButtonClick = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleMapLinkButtonClick = useCallback(() => {
    history.push("/map");
  }, [history]);

  const handleShareButtonClick = useCallback(() => {
    const currentUrl = window.location.href;

    if ("share" in navigator) {
      console.log("지원하지 않는 브라우저입니다.");
    } else {
      navigator
        .share({
          title: `<${CardStore.cardDetailData && CardStore.cardDetailData.name}>\r\n작업공간으로 이 카페를 추천합니다!\r\n`,
          url: currentUrl,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    }
  }, [CardStore.cardDetailData]);

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
        isLoadingFetchCard={CardStore.isLoading.fetchCard}
        isCardDatasEmpty={isEmpty(CardStore.cardDatas)}
      />
    </>
  );
};

export default observer(HeaderContainer);
