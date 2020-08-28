/* global kakao */
import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import useStore from "../hooks/useStore";
import { UserIdContext } from "./UserIdProvider";
import Detail from "../components/Detail/Detail";
import ModalEvaluation from "../components/ModalEvaluation/ModalEvaluation";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import MapPickerSprite from "../images/icon-mappicker-sprite.png";

const selectedMarkerImage = new kakao.maps.MarkerImage(MapPickerSprite, new kakao.maps.Size(48, 48), {
  spriteOrigin: new kakao.maps.Point(24, 0),
  spriteSize: new kakao.maps.Size(72, 48),
  offset: new kakao.maps.Point(23, 46),
});

const DetailContainer = props => {
  const { hasMainShow } = props;
  const { CardStore } = useStore();

  const currentParams = useParams();
  const currentId = currentParams.id;
  const userId = useContext(UserIdContext);

  const [mapInstance, setMapInstance] = useState(null);
  const mapRef = useRef(null);

  const getKakaoMapObject = useCallback(() => {
    const { latitude, longitude } = toJS(CardStore.cardDetailData);
    const container = mapRef.current;
    const nowLatLng = new kakao.maps.LatLng(latitude, longitude);

    const options = {
      center: nowLatLng,
      level: 3,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);

    const marker = new window.kakao.maps.Marker({
      position: nowLatLng,
      image: selectedMarkerImage,
      clickable: false,
    });

    marker.setMap(kakaoMap);
    kakaoMap.setDraggable(false);
    kakaoMap.setZoomable(false);
    return kakaoMap;
  }, [CardStore.cardDetailData]);

  const handleSubmitButtonClick = useCallback(() => {
    CardStore.postCardRating(userId, JSON.parse(window.localStorage.cardRatings));
  }, [CardStore, userId]);

  useEffect(() => {
    CardStore.fetchCardDetail(currentId);
    CardStore.fetchUserRating(userId, currentId);
  }, [CardStore, currentId, userId]);

  useEffect(() => {
    if (CardStore.cardDetailData && !CardStore.isUserRatingLoading) {
      const kakaoMap = getKakaoMapObject();
      setMapInstance(kakaoMap);
    }
  }, [CardStore.cardDetailData, CardStore.isUserRatingLoading, getKakaoMapObject]);

  useEffect(() => {
    console.log(toJS(CardStore.cardDetailData));
  }, [CardStore.cardDetailData]);

  return CardStore.cardDetailData === null || CardStore.isUserRatingLoading ? (
    <div>
      <LoadingBar hasMainLoading={false} />
    </div>
  ) : (
    <>
      <Detail card={toJS(CardStore.cardDetailData)} hasMainShow={hasMainShow} mapRef={mapRef} />
      <ModalEvaluation userRating={toJS(CardStore.userRatingData)} mainTitle={toJS(CardStore.cardDetailData).name} currentId={currentId} onSubmitButtonClick={handleSubmitButtonClick} />
    </>
  );
};

export default observer(DetailContainer);
