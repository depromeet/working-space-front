import React, { useCallback, useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import Header from "../components/Header/Header";

const MainContainer = () => {
  const { SampleStore } = useStore();

  useEffect(() => {
    SampleStore.fetchSample();
  }, [SampleStore]);

  const handleLocationButtonClick = useCallback(() => {
    console.log(toJS(SampleStore.localTitle));
  }, [SampleStore.localTitle]);

  return (
    <>
      <Header
        onLocationButtonClick={handleLocationButtonClick}
        localTitle={toJS(SampleStore.localTitle)}
        hasBackgroundColor={true}
        hasBackButton={false}
        hasShareButton={false}
        hasMapButton={true}
        hasLocalText={false}
        hasNaviBox={true}
      />
    </>
  );
};

export default observer(MainContainer);
