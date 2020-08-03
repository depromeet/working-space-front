/* global kakao */
import React, { useState, useEffect, useCallback } from "react";
import Map from "../components/Map/Map";
import useGeoLocation from "../hooks/useGeoLocation";

const MapContainer = () => {
  const [map, setMap] = useState(null);
  const [markers] = useState([
    {
      title: "독립문",
      latlng: new kakao.maps.LatLng(37.57273868595916, 126.95938401319184),
    },
  ]);
  const { currentCoordinates } = useGeoLocation();

  const getKakaoMapObject = useCallback(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);
    return kakaoMap;
  }, []);

  const moveToCurrentCoordinates = useCallback(() => {
    if (currentCoordinates) {
      const lat = currentCoordinates.latitude;
      const lng = currentCoordinates.longitude;
      const nowLatLng = new kakao.maps.LatLng(lat, lng);
      map.setCenter(nowLatLng);
    }
  }, [currentCoordinates, map]);

  const showMarkers = useCallback(() => {
    markers.forEach(marker => {
      const newMarker = new kakao.maps.Marker({
        position: marker.latlng,
        title: marker.title,
      });
      newMarker.setMap(map);
    });
  }, [markers, map]);

  useEffect(() => {
    const kakaoMap = getKakaoMapObject();
    setMap(kakaoMap);
  }, [getKakaoMapObject]);

  useEffect(() => {
    moveToCurrentCoordinates();
  }, [moveToCurrentCoordinates]);

  useEffect(() => {
    showMarkers();
  }, [showMarkers, markers]);

  return <Map />;
};

export default MapContainer;
