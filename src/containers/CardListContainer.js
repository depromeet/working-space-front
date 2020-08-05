import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import CardList from "../components/CardList/CardList";
import CardListSort from "../components/CardList/CardListSort";

const CardListContainer = () => {
  const history = useHistory();
  const { CardStore } = useStore();

  useEffect(() => {
    CardStore.fetchCard();
  }, [CardStore]);

  const handleCardLinkClick = useCallback(card => {
    history.push(`/detail/${card.id}`);
  }, []);

  return (
    <>
      <CardListSort />
      <CardList cardList={toJS(CardStore.cardList)} onCardLinkClick={handleCardLinkClick} />
    </>
  );
};

export default observer(CardListContainer);
