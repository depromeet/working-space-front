import React, { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import Swipe from "../components/Swipe/Swipe";

const SwipeContainer = () => {
  const { SampleStore } = useStore();

  useEffect(() => {
    SampleStore.fetchSample();
  }, [SampleStore]);

  return <Swipe swipeImage={toJS(SampleStore.swipeImage)} />;
};

export default observer(SwipeContainer);
