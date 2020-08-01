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

  const onClickNavButton = useCallback(() => {
    console.log(toJS(SampleStore.localData));
  }, [SampleStore.localData]);

  return (
    <>
      <Header handleNavClick={onClickNavButton} localData={toJS(SampleStore.localData)} backColor mapBtn naviBox shareBtn={false} />
    </>
  );
};

export default observer(MainContainer);
