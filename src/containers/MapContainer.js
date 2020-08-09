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
  const [locations, setLocations] = useState([
    {
      title: "독립문",
      latlng: new kakao.maps.LatLng(37.57273868595916, 126.95938401319184),
      selected: false,
    },
    {
      title: "다른 곳",
      latlng: new kakao.maps.LatLng(37.57273868595916, 126.95924401319184),
      selected: false,
    },
    {
      title: "또 다른 곳",
      latlng: new kakao.maps.LatLng(37.57273868595916, 126.95910401319184),
      selected: false,
    },
  ]);
  const [markers, setMarkers] = useState([]);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(-1);

  const { currentCoordinates, updateGeoLocation } = useGeoLocation();

  const getKakaoMapObject = useCallback(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);
    return kakaoMap;
  }, []);

  const deleteMarkers = useCallback(() => {
    if (markers && markers !== []) {
      markers.forEach(marker => {
        marker.setMap(null);
      });
    }
    setMarkers([]);
  }, [markers]);

  const handleClickMarker = useCallback(
    (marker, index) => {
      setSelectedMarkerIndex(index);
      setLocations(prevState => {
        const newLocations = [...prevState];
        newLocations[index].selected = true;
        if (selectedMarkerIndex >= 0) {
          newLocations[selectedMarkerIndex].selected = false;
        }
        console.log(newLocations[index], newLocations[selectedMarkerIndex]);
        return newLocations;
      });
    },
    [selectedMarkerIndex],
  );

  const showMarkers = useCallback(() => {
    if (!mapInstance) {
      return;
    }
    console.log("showMarkers");

    const markersList = [];
    locations.forEach((location, index) => {
      const marker = new kakao.maps.Marker({
        position: location.latlng,
        title: location.title,
        clickable: true,
        image: location.selected ? selectedMarkerImage : unselectedMarkerImage,
      });
      kakao.maps.event.addListener(marker, "click", () => handleClickMarker(marker, index));
      marker.setMap(mapInstance);
      markersList.push(marker);
    });
    setMarkers(markersList);
  }, [handleClickMarker, locations, mapInstance]);

  const moveToCurrentCoordinates = useCallback(() => {
    if (currentCoordinates) {
      const lat = currentCoordinates.latitude;
      const lng = currentCoordinates.longitude;
      const nowLatLng = new kakao.maps.LatLng(lat, lng);
      mapInstance.setCenter(nowLatLng);
    }
  }, [currentCoordinates, mapInstance]);

  const getCurrentCoordinates = useCallback(async () => {
    const coordinates = await updateGeoLocation();
    console.log(coordinates);
  }, [updateGeoLocation]);

  useEffect(() => {
    const kakaoMap = getKakaoMapObject();
    setMapInstance(kakaoMap);
  }, [getKakaoMapObject]);

  useEffect(() => {
    moveToCurrentCoordinates();
  }, [moveToCurrentCoordinates]);

  useEffect(() => {
    deleteMarkers();
    showMarkers();
    // 주의 : deleteMarkers를 dependency array에 포함하지 말 것!
    // markers의 변경으로 인해 무한 루프가 발생합니다.
  }, [showMarkers, locations]);

  return (
    <>
      <Map mapRef={mapRef} />
      <FloatingActionButton onGetCurrentCoordinates={getCurrentCoordinates}>{currentCoordinates ? <LocationActiveIcon /> : <LocationIcon />}</FloatingActionButton>
    </>
  );
};

export default MapContainer;
