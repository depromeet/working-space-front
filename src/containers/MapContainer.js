/* eslint-disable no-nested-ternary */
/* global kakao */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { isEmpty, debounce } from "lodash";
import useStore from "../hooks/useStore";
import Map from "../components/Map/Map";
import SelectPopup from "../components/SelectPopup/SelectPopup";
import { ReactComponent as LocationIcon } from "../images/icon-locate.svg";
import { ReactComponent as LocationActiveIcon } from "../images/icon-locate-active.svg";
import CurrentLocationIcon from "../images/current-location.svg";
import FloatingActionButton from "../components/FloatingActionButton/FloatingActionButton";
import BlinkingLocationIcon from "../components/BlinkingLocationIcon/BlinkingLocationIcon";
import Card from "../components/Card/Card";
import useGeoLocation from "../hooks/useGeoLocation";
import MapPickerSprite from "../images/icon-mappicker-sprite.png";

const selectedMarkerImage = new kakao.maps.MarkerImage(MapPickerSprite, new kakao.maps.Size(48, 48), {
  spriteOrigin: new kakao.maps.Point(24, 0),
  spriteSize: new kakao.maps.Size(72, 48),
  offset: new kakao.maps.Point(23, 46),
});
const unselectedMarkerImage = new kakao.maps.MarkerImage(MapPickerSprite, new kakao.maps.Size(24, 24), {
  spriteOrigin: new kakao.maps.Point(0, 0),
  spriteSize: new kakao.maps.Size(72, 48),
});
const currentLocationMarkerImage = new kakao.maps.MarkerImage(CurrentLocationIcon, new kakao.maps.Size(36, 36), {
  offset: new kakao.maps.Point(18, 18),
});

const MapContainer = () => {
  const history = useHistory();
  const mapRef = useRef(null);
  const { currentCoordinates, fetch, isFetching } = useGeoLocation();

  const { CardStore } = useStore();

  const [mapInstance, setMapInstance] = useState(null);
  const [cafeData, setCafeData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [markers, setMarkers] = useState([]);
  const [nowSelectingCafe, setNowSelectingCafe] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [nowSelectingMarker, setNowSelectingMarker] = useState(null);
  const [nowSelectingCombineCafes, setNowSelectingCombineCafes] = useState(null);
  const [nowSelectingCombineMarker, setNowSelectingCombineMarker] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [currentLocationMarker, setCurrentLocationMarker] = useState(null);
  const [isOutOfCenter, setIsOutOfCenter] = useState(true);

  const getKakaoMapObject = useCallback(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(37.498095, 127.02761),
      level: 3,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);
    return kakaoMap;
  }, []);

  const unselectMarker = useCallback(() => {
    setNowSelectingCombineCafes(null);
    setNowSelectingCombineMarker(prevState => {
      if (!prevState) return;
      prevState.setImage(unselectedMarkerImage);
      return null;
    });
    setNowSelectingCafe(null);
    setNowSelectingMarker(prevState => {
      if (!prevState) return;
      prevState.setImage(unselectedMarkerImage);
      return null;
    });
  }, []);

  const handleCloseSelectPopup = useCallback(() => {
    setNowSelectingCombineCafes(null);
  }, []);

  const handleSubmitSelectPopup = useCallback(
    cafe => {
      setNowSelectingCafe(cafe);
      nowSelectingCombineMarker.setImage(selectedMarkerImage);
      handleCloseSelectPopup();
    },
    [handleCloseSelectPopup, nowSelectingCombineMarker],
  );

  const handleClickMarker = useCallback(
    (cafe, marker) => {
      unselectMarker();
      setNowSelectingCafe(prevState => {
        if (prevState && prevState.marker) {
          prevState.marker.setImage(unselectedMarkerImage);
        }
        return cafe;
      });
      setNowSelectingMarker(marker);
      marker.setImage(selectedMarkerImage);
    },
    [unselectMarker],
  );

  const handleClickCombinedMarker = useCallback(
    (cafes, marker) => {
      unselectMarker();
      setNowSelectingCombineCafes(cafes);
      setNowSelectingCombineMarker(marker);
    },
    [unselectMarker],
  );

  const resetMarkers = useCallback(() => {
    setMarkers(prevState => {
      prevState.forEach(marker => {
        marker.setMap(null);
        marker.setImage(unselectedMarkerImage);
      });

      return [];
    });
  }, []);

  const showAllMarkers = useCallback(() => {
    Object.entries(cafeData).forEach(item => {
      const [location, cafe] = item;
      const [longitude, latitude] = location.split(",");
      const latlng = new kakao.maps.LatLng(latitude, longitude);
      const marker = new kakao.maps.Marker({ title: item.name, position: latlng, image: unselectedMarkerImage, clickable: true });

      if (cafe.length === 1) {
        kakao.maps.event.addListener(marker, "click", () => handleClickMarker(cafe[0], marker));
      } else if (cafe.length > 1) {
        kakao.maps.event.addListener(marker, "click", () => handleClickCombinedMarker(cafe, marker));
      } else {
        return;
      }

      kakao.maps.event.addListener(mapInstance, "click", () => {
        unselectMarker();
        mapInstance && mapInstance.relayout();
      });
      marker.setMap(mapInstance);

      setMarkers(prevState => {
        const nextState = [...prevState];
        nextState.push(marker);
        return nextState;
      });
    });
  }, [handleClickMarker, handleClickCombinedMarker, unselectMarker, cafeData, mapInstance]);

  const moveToCurrentCoordinates = useCallback(() => {
    if (!mapInstance || !currentCoordinates) {
      return;
    }

    const lat = currentCoordinates.latitude;
    const lng = currentCoordinates.longitude;
    const nowLatLng = new kakao.maps.LatLng(lat, lng);
    mapInstance.setCenter(nowLatLng);
    setCurrentLocationMarker(prevState => {
      if (prevState) {
        prevState.setMap(null);
      }
      return new kakao.maps.Marker({
        title: "현위치",
        position: nowLatLng,
        map: mapInstance,
        image: currentLocationMarkerImage,
        clickable: false,
      });
    });
  }, [currentCoordinates, mapInstance]);

  const getCurrentCoordinates = useCallback(() => {
    unselectMarker();
    resetMarkers();
    fetch();
  }, [resetMarkers, unselectMarker, fetch]);

  const loadCafeData = useCallback(async () => {
    await CardStore.fetchCard();
  }, [CardStore]);

  const checkKakaoMapDragEnd = useCallback(() => {
    if (mapInstance && currentCoordinates) {
      kakao.maps.event.addListener(mapInstance, "dragend", () => {
        const latlng = mapInstance.getCenter();
        const centerLatitude = latlng.getLat();
        const centerLongitude = latlng.getLng();

        const currentLatitude = currentCoordinates.latitude;
        const currentLongitude = currentCoordinates.longitude;

        const latitudeDifference = Math.abs(currentLatitude - centerLatitude);
        const longitudeDifference = Math.abs(currentLongitude - centerLongitude);

        // 현위치와 지도의 중심이 0.0025만큼 차이가 있을 때
        // 현위치에서 지도의 중심이 멀어져서 현위치가 아니라고 한다.
        if (latitudeDifference > 0.0025 || longitudeDifference > 0.0025) {
          setIsOutOfCenter(false);
        } else {
          setIsOutOfCenter(true);
        }
      });
    }
  }, [mapInstance, currentCoordinates]);

  const handleCardLinkClick = useCallback(
    card => {
      history.push(`/detail/${card.id}`);
    },
    [history],
  );

  const handleLocationButtonClick = useCallback(() => {
    CardStore.init();
    getCurrentCoordinates();
    loadCafeData();
  }, [CardStore, getCurrentCoordinates, loadCafeData]);

  const setViewportHeight = useCallback(() => {
    document.body.style.height = `${window.innerHeight}px`;
    mapInstance && mapInstance.relayout();
  }, [mapInstance]);

  const reformatCafeData = useCallback(() => {
    const initialData = toJS(CardStore.cardDatas);
    const cardData = {};

    initialData.forEach(item => {
      const { location } = item;
      const locationKey = location.toString();

      if (Object.keys(cardData).includes(locationKey)) {
        cardData[locationKey].push(item);
      } else {
        cardData[locationKey] = [item];
      }
    });

    setCafeData(cardData);
    setNowSelectingCafe(null);
  }, [CardStore.cardDatas]);

  useEffect(() => {
    const kakaoMap = getKakaoMapObject();
    setMapInstance(kakaoMap);
  }, [getKakaoMapObject]);

  useEffect(() => {
    checkKakaoMapDragEnd();
  }, [checkKakaoMapDragEnd]);

  useEffect(() => {
    const debounced = debounce(setViewportHeight, 200);
    window.addEventListener("resize", debounced);

    return function cleanup() {
      debounced.cancel();
      window.removeEventListener("resize", debounced);
    };
  }, [mapInstance, setViewportHeight]);

  useEffect(() => {
    moveToCurrentCoordinates();
    setIsOutOfCenter(true);
  }, [moveToCurrentCoordinates, setIsOutOfCenter]);

  useEffect(() => {
    if (isEmpty(CardStore.cardDatas)) {
      loadCafeData();
      return;
    }
    reformatCafeData();
  }, [CardStore.cardDatas, loadCafeData, reformatCafeData]);

  useEffect(() => {
    showAllMarkers();

    return () => {
      unselectMarker();
    };
  }, [showAllMarkers, unselectMarker, cafeData]);

  useEffect(() => {
    showAllMarkers();

    return () => {
      Object.entries(cafeData).forEach(item => {
        const cafe = item[1];
        const { marker } = cafe[0];
        marker.setImage(unselectedMarkerImage);

        setNowSelectingCafe(null);
      });
    };
  }, [showAllMarkers, cafeData]);

  useEffect(() => {
    setViewportHeight();
  }, [setViewportHeight]);

  return (
    <>
      <Map mapRef={mapRef} isSelected={!!nowSelectingCafe}>
        <FloatingActionButton onClick={handleLocationButtonClick}>
          {!currentCoordinates || isFetching || !isOutOfCenter ? <LocationIcon /> : CardStore.isLoading.fetchCard ? <BlinkingLocationIcon /> : <LocationActiveIcon />}
        </FloatingActionButton>
      </Map>
      {nowSelectingCafe && <Card showOnlyInfo={true} onCardLinkClick={() => handleCardLinkClick(nowSelectingCafe)} cardData={nowSelectingCafe} />}
      {nowSelectingCombineCafes && <SelectPopup cafes={nowSelectingCombineCafes} onClose={handleCloseSelectPopup} onSubmit={handleSubmitSelectPopup} />}
    </>
  );
};

export default observer(MapContainer);
