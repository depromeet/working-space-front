/* global kakao */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import Detail from "../components/Detail/Detail";
import ModalEvaluation from "../components/ModalEvaluation/ModalEvaluation";

const DetailContainer = props => {
  const { hasMainShow } = props;
  const { CardStore } = useStore();

  const [mapInstance, setMapInstance] = useState(null);
  const mapRef = useRef(null);

  const getKakaoMapObject = useCallback(async () => {
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
    const kakaoMap = getKakaoMapObject();
    setMapInstance(kakaoMap);
  }, [getKakaoMapObject]);

  useEffect(() => {
    CardStore.fetchCard();
  }, [CardStore]);

  return (
    <>
      <Detail hasMainShow={hasMainShow} mapRef={mapRef} />
      <ModalEvaluation />
    </>
  );
};

export default observer(DetailContainer);
