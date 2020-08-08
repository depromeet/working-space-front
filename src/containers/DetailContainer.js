import React, { useEffect } from "react";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import Detail from "../components/Detail/Detail";

const DetailContainer = () => {
  const { CardStore } = useStore();

  useEffect(() => {
    CardStore.fetchCard();
  }, [CardStore]);

  return <Detail />;
};

export default observer(DetailContainer);
