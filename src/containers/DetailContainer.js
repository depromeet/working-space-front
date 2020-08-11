import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import Detail from "../components/Detail/Detail";
import Modal from "../components/Modal/Modal";

const DetailContainer = props => {
  const { hasMainShow } = props;
  const { CardStore } = useStore();

  useEffect(() => {
    CardStore.fetchCard();
  }, [CardStore]);

  return (
    <>
      <Detail hasMainShow={hasMainShow} />
      <Modal />
    </>
  );
};

export default observer(DetailContainer);
