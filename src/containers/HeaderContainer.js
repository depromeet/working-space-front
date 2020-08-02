import React, { useCallback, useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import Header from "../components/Header/Header";

const HeaderContainer = props => {
  const { hasBackgroundColor, hasBackButton, hasShareButton, hasMapButton, hasLocalText, hasNaviBox } = props;
  const { SampleStore } = useStore();

  useEffect(() => {
    SampleStore.fetchSample();
  }, [SampleStore]);

  const handleLocationButtonClick = useCallback(() => {
    console.log(toJS(SampleStore.title));
  }, [SampleStore.title]);

  return (
    <>
      <Header
        onLocationButtonClick={handleLocationButtonClick}
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
