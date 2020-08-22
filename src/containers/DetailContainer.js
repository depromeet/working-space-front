/* global kakao */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import useStore from "../hooks/useStore";
import Detail from "../components/Detail/Detail";
import ModalEvaluation from "../components/ModalEvaluation/ModalEvaluation";
import LoadingBar from "../components/LoadingBar/LoadingBar";

const DetailContainer = props => {
  const { hasMainShow } = props;
  const { CardDetailStore } = useStore();

  const currentParams = useParams();
  const currentId = currentParams.id;

  const [mapInstance, setMapInstance] = useState(null);
  const mapRef = useRef(null);

  const getKakaoMapObject = useCallback(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(37.498095, 127.02761),
      level: 3,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);
    kakaoMap.setDraggable(false);
    kakaoMap.setZoomable(false);
    return kakaoMap;
  }, []);

  useEffect(() => {
    CardDetailStore.fetchCardDetail(currentId);

    /*
      const kakaoMap = getKakaoMapObject();
      setMapInstance(kakaoMap);
    */
  }, [currentId, CardDetailStore]);

  return CardDetailStore.cardDetailData === null ? (
    <div>
      <LoadingBar hasMainLoading={false} />
    </div>
  ) : (
    <>
      <Detail card={toJS(CardDetailStore.cardDetailData)} hasMainShow={hasMainShow} mapRef={mapRef} />
      <ModalEvaluation />
    </>
  );
};

export default observer(DetailContainer);
