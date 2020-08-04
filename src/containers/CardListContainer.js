import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import CardList from "../components/CardList/CardList";

const CardListContainer = () => {
  const history = useHistory();
  const { SampleStore } = useStore();

  useEffect(() => {
    SampleStore.fetchSample();
  }, [SampleStore]);

  const handleCardLinkClick = useCallback(card => {
    history.push(`/detail/${card.id}`);
  }, []);

  return <CardList cardList={toJS(SampleStore.cardList)} onCardLinkClick={handleCardLinkClick} />;
};

export default observer(CardListContainer);
