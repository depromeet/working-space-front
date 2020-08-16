/* global kakao */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import debounce from "lodash.debounce";
import Map from "../components/Map/Map";
import { ReactComponent as LocationIcon } from "../images/icon-locate.svg";
import { ReactComponent as LocationActiveIcon } from "../images/icon-locate-active.svg";
import FloatingActionButton from "../components/FloatingActionButton/FloatingActionButton";
import Card from "../components/Card/Card";
import useGeoLocation from "../hooks/useGeoLocation";
import SelectedMapPickerImage from "../images/icon-mappicker-select.svg";
import MapPickerImage from "../images/icon-mappicker.svg";

const selectedMarkerImage = new kakao.maps.MarkerImage(SelectedMapPickerImage, new kakao.maps.Size(48, 48), { offset: new kakao.maps.Point(24, 47) });
const unselectedMarkerImage = new kakao.maps.MarkerImage(MapPickerImage, new kakao.maps.Size(24, 24), { offset: new kakao.maps.Point(12, 23) });

const MapContainer = () => {
  const history = useHistory();
  const mapRef = useRef(null);
  const { currentCoordinates, fetch, isFetching } = useGeoLocation();

  const [mapInstance, setMapInstance] = useState(null);
  const [cafeData, setCafeData] = useState([]);
  const [nowSelectingCafe, setNowSelectingCafe] = useState({
    marker: null,
    location: null,
  });

  const getKakaoMapObject = useCallback(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);
    return kakaoMap;
  }, []);

  const handleClickMarker = useCallback(data => {
    setNowSelectingCafe(prevState => {
      if (prevState.marker) {
        prevState.marker.setImage(unselectedMarkerImage);
      }
      return data;
    });

    data.marker.setImage(selectedMarkerImage);
  }, []);

  const deleteAllMarkers = useCallback(() => {
    setCafeData(prevState => {
      prevState.forEach(data => {
        data.marker.setMap(null);
      });
      return [];
    });
  }, []);

  const showAllMarkers = useCallback(() => {
    if (!mapInstance || cafeData.length <= 0) {
      return;
    }

    cafeData.forEach(data => {
      const { marker } = data;
      kakao.maps.event.addListener(marker, "click", () => handleClickMarker(data));
      kakao.maps.event.addListener(mapInstance, "click", () => {
        marker.setImage(unselectedMarkerImage);
        setNowSelectingCafe({
          marker: null,
          location: null,
        });
        mapInstance && mapInstance.relayout();
      });
      marker.setMap(mapInstance);
    });
  }, [handleClickMarker, cafeData, mapInstance]);

  const moveToCurrentCoordinates = useCallback(() => {
    if (!mapInstance || !currentCoordinates) {
      return;
    }

    const lat = currentCoordinates.latitude;
    const lng = currentCoordinates.longitude;
    const nowLatLng = new kakao.maps.LatLng(lat, lng);
    mapInstance.setCenter(nowLatLng);

    // 마커 클릭 테스트용
    // 현위치를 기반으로 마커를 생성하기 위해 cafeData에 더미 데이터를 생성합니다.
    setCafeData(prevState => {
      const newCafeData = [...prevState];
      const currentLocationItem = {
        location: {
          id: 1,
          title: "현위치",
          location: "현위치 주소",
          distance: "0km",
          rating: 0,
          tagCount: 0,
          latlng: nowLatLng,
          isSelected: false,
        },
        marker: new kakao.maps.Marker({
          position: nowLatLng,
          title: "현위치",
          clickable: true,
          image: unselectedMarkerImage,
        }),
      };
      newCafeData.push(currentLocationItem);

      const testLatLng1 = new kakao.maps.LatLng(lat, lng - 0.0003);
      const testLatLng2 = new kakao.maps.LatLng(lat, lng + 0.0003);
      const testLocationItem1 = {
        location: {
          id: 2,
          title: "카페숲",
          location: "서울시 용산구 청파동 312",
          distance: "5.2km",
          rating: 4.4,
          tagCount: 4,
          latlng: testLatLng1,
          isSelected: false,
        },
        marker: new kakao.maps.Marker({
          position: testLatLng1,
          title: "카페숲",
          clickable: true,
          image: unselectedMarkerImage,
        }),
      };
      const testLocationItem2 = {
        location: {
          id: 3,
          title: "이쁜카페",
          location: "서울시 서대문구 통일로 100",
          distance: "1.2km",
          rating: 4.1,
          tagCount: 7,
          latlng: testLatLng2,
          isSelected: false,
        },
        marker: new kakao.maps.Marker({
          position: testLatLng2,
          title: "이쁜카페",
          clickable: true,
          image: unselectedMarkerImage,
        }),
      };
      newCafeData.push(testLocationItem1);
      newCafeData.push(testLocationItem2);

      return newCafeData;
    });
  }, [currentCoordinates, mapInstance]);

  const getCurrentCoordinates = useCallback(() => {
    deleteAllMarkers();
    setNowSelectingCafe({
      marker: null,
      location: null,
    });
    fetch();
  }, [deleteAllMarkers, fetch]);

  const handleCardLinkClick = useCallback(
    card => {
      history.push(`/detail/${card.id}`);
    },
    [history],
  );

  useEffect(() => {
    const kakaoMap = getKakaoMapObject();
    setMapInstance(kakaoMap);
  }, [getKakaoMapObject]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      debounce(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        mapInstance && mapInstance.relayout();
      }, 200),
    );
  }, [mapInstance]);

  useEffect(() => {
    moveToCurrentCoordinates();
  }, [moveToCurrentCoordinates]);

  useEffect(() => {
    showAllMarkers();
  }, [showAllMarkers]);

  return (
    <>
      <Map mapRef={mapRef} isSelected={!!(nowSelectingCafe.marker && nowSelectingCafe.location)}>
        <FloatingActionButton onGetCurrentCoordinates={getCurrentCoordinates}>{!currentCoordinates || isFetching ? <LocationIcon /> : <LocationActiveIcon />}</FloatingActionButton>
      </Map>
      {nowSelectingCafe.marker && nowSelectingCafe.location && <Card showOnlyInfo={true} onCardLinkClick={() => handleCardLinkClick(nowSelectingCafe.location)} cardData={nowSelectingCafe.location} />}
    </>
  );
};

export default MapContainer;
