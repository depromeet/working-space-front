import React, { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import Swiper from "../components/Swiper/Swiper";

const SwiperContainer = () => {
  const { SampleStore } = useStore();

  useEffect(() => {
    SampleStore.fetchSample();
  }, [SampleStore]);

  return <Swiper swiperImage={toJS(SampleStore.swiperImage)} />;
};

export default observer(SwiperContainer);
