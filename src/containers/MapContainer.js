/* global kakao */
import React, { useState, useEffect, useCallback, useRef } from "react";
import Map from "../components/Map/Map";
import { ReactComponent as LocationIcon } from "../images/icon-locate.svg";
import { ReactComponent as LocationActiveIcon } from "../images/icon-locate-active.svg";
import FloatingActionButton from "../components/FloatingActionButton/FloatingActionButton";
import useGeoLocation from "../hooks/useGeoLocation";
import SelectedMapPickerImage from "../images/icon-mappicker-select.svg";
import MapPickerImage from "../images/icon-mappicker.svg";

const selectedMarkerImage = new kakao.maps.MarkerImage(SelectedMapPickerImage, new kakao.maps.Size(48, 48), { offset: new kakao.maps.Point(24, 47) });
const unselectedMarkerImage = new kakao.maps.MarkerImage(MapPickerImage, new kakao.maps.Size(24, 24), { offset: new kakao.maps.Point(12, 23) });

const MapContainer = () => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [locations, setLocations] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [markers, setMarkers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { currentCoordinates, fetch } = useGeoLocation();

  const getKakaoMapObject = useCallback(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);
    return kakaoMap;
  }, []);

  const handleClickMarker = useCallback(marker => {
    setSelectedMarker(prevMarker => {
      if (prevMarker) {
        prevMarker.setImage(unselectedMarkerImage);
      }
      return marker;
    });
    marker.setImage(selectedMarkerImage);
  }, []);

  const showAllMarkers = useCallback(() => {
    if (!mapInstance || locations.length <= 0) {
      return;
    }

    const markersList = [];
    locations.forEach(location => {
      const marker = new kakao.maps.Marker({
        position: location.latlng,
        title: location.title,
        clickable: true,
        image: unselectedMarkerImage,
      });
      kakao.maps.event.addListener(marker, "click", () => handleClickMarker(marker));
      marker.setMap(mapInstance);
      markersList.push(marker);
    });
    setMarkers(markersList);
  }, [handleClickMarker, locations, mapInstance]);

  const moveToCurrentCoordinates = useCallback(() => {
    if (!mapInstance || !currentCoordinates) {
      return;
    }

    const lat = currentCoordinates.latitude;
    const lng = currentCoordinates.longitude;
    const nowLatLng = new kakao.maps.LatLng(lat, lng);
    mapInstance.setCenter(nowLatLng);

    setLocations(prevState => {
      const newLocations = [...prevState];
      const currentLocationItem = {
        title: "현위치",
        latlng: nowLatLng,
        selected: false,
      };
      newLocations.push(currentLocationItem);

      // for click test
      const testLatLng1 = new kakao.maps.LatLng(lat, lng - 0.0003);
      const testLatLng2 = new kakao.maps.LatLng(lat, lng + 0.0003);
      const testLocationItem1 = {
        title: "테스트1",
        latlng: testLatLng1,
        selected: false,
      };
      const testLocationItem2 = {
        title: "테스트2",
        latlng: testLatLng2,
        selected: false,
      };
      newLocations.push(testLocationItem1);
      newLocations.push(testLocationItem2);

      return newLocations;
    });
  }, [currentCoordinates, mapInstance]);

  const getCurrentCoordinates = useCallback(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    const kakaoMap = getKakaoMapObject();
    setMapInstance(kakaoMap);
  }, [getKakaoMapObject]);

  useEffect(() => {
    moveToCurrentCoordinates();
  }, [moveToCurrentCoordinates]);

  useEffect(() => {
    showAllMarkers();
  }, [showAllMarkers]);

  return (
    <>
      <Map mapRef={mapRef} />
      <FloatingActionButton onGetCurrentCoordinates={getCurrentCoordinates}>{currentCoordinates ? <LocationActiveIcon /> : <LocationIcon />}</FloatingActionButton>
    </>
  );
};

export default MapContainer;
