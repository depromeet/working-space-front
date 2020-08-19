import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import CardList from "../components/CardList/CardList";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import useGeoLocation from "../hooks/useGeoLocation";

const CardListContainer = props => {
  const { hasMainShow } = props;
  const history = useHistory();
  const { CardStore } = useStore();
  const [pageNumber, setPageNumber] = useState(1);

  const handleCardLinkClick = useCallback(card => {
    history.push(`/detail/${card.id}`);
  }, []);

  const loadNextPage = useCallback(async () => {
    await CardStore.fetchCard(pageNumber);
    setPageNumber(pageNumber + 1);
  }, [pageNumber]);

  const LoadingIndicator = useCallback(() => <LoadingBar />, []);

  return (
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
  );
};

export default observer(CardListContainer);
