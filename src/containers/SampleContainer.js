import React, { useCallback, useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import Sample from "../components/Sample";
import useStore from "../hooks/useStore";

const SampleContainer = () => {
  const { CardStore } = useStore();

  useEffect(() => {
    CardStore.fetchCard();
  }, [CardStore]);

  const onClickButton = useCallback(() => {
    console.log("컨테이너에서는 UI로직과 관련 없는 라우팅, 도메인 데이터 가공등의 역할을 합니다.");
    console.log(toJS(CardStore.sampleList));
    console.log("이런식으로 Mobx의 Store에 접근해서 데이터를 가져와서 자식에게 내려줍니다.");
    // 여기서 라우팅
  }, [CardStore.sampleList]);

  return <Sample onClick={onClickButton} userList={toJS(CardStore.sampleList)} />;
};

export default observer(SampleContainer);
