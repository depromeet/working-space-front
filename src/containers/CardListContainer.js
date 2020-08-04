import React, { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import CardList from "../components/CardList/CardList";

const CardListContainer = () => {
  const { SampleStore } = useStore();

  useEffect(() => {
    SampleStore.fetchSample();
  }, [SampleStore]);

  return <CardList cardList={toJS(SampleStore.cardList)} />;
};

export default observer(CardListContainer);
