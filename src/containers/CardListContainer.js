import React, { useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import CardList from "../components/CardList/CardList";
import NoneCardList from "../components/CardList/NoneCardList";
import LoadingBar from "../components/LoadingBar/LoadingBar";

const CardListContainer = props => {
  const { hasMainShow } = props;
  const history = useHistory();
  const { CardStore } = useStore();
  const pageNumber = useRef(1);

  const handleCardLinkClick = useCallback(card => {
    history.push(`/detail/${card.id}`);
  }, []);

  const loadNextPage = useCallback(async () => {
    pageNumber.current++;
    await CardStore.fetchCard(pageNumber.current);
  }, []);

  const LoadingIndicator = useCallback(() => <LoadingBar hasMainLoading={true} />, []);

  return CardStore.cardDatas !== null ? (
    <CardList
      cardDatas={toJS(CardStore.cardDatas)}
      onCardLinkClick={handleCardLinkClick}
      cardHeight={288}
      hasNextPage={true}
      isNextPageLoading={false}
      loadNextPage={loadNextPage}
      LoadingIndicator={LoadingIndicator}
      hasMainShow={hasMainShow}
    />
  ) : (
    <NoneCardList />
  );
};

export default observer(CardListContainer);
