import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import Header from "../components/Header/Header";

const HeaderContainer = props => {
  const { hasBackgroundColor, hasBackButton, hasShareButton, hasMapButton, hasLocalText, hasNaviBox } = props;
  const history = useHistory();
  const { SampleStore } = useStore();

  useEffect(() => {
    SampleStore.fetchSample();
  }, [SampleStore]);

  const handleLocationButtonClick = useCallback(() => {
    console.log(toJS(SampleStore.title));
  }, [SampleStore.title]);

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
        title={toJS(SampleStore.title)}
        hasBackgroundColor={hasBackgroundColor}
        hasBackButton={hasBackButton}
        hasShareButton={hasShareButton}
        hasMapButton={hasMapButton}
        hasLocalText={hasLocalText}
        hasNaviBox={hasNaviBox}
      />
    </>
  );
};

export default observer(HeaderContainer);
