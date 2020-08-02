/* global kakao */
import React, { useState, useEffect, useCallback } from 'react';
import Map from '../components/Map/Map';
import useGeoLocation from '../hooks/useGeoLocation';

const MapContainer = () => {
	const [map, setMap] = useState(null);
	const [markers] = useState([
		{
			title: '집',
			latlng: new kakao.maps.LatLng(37.57273868595916, 126.95938401319184),
		},
	]);
	const [coordinates] = useGeoLocation();

	const getKakaoMapObject = useCallback(() => {
		const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};

		const kakaoMap = new window.kakao.maps.Map(container, options);
		return kakaoMap;
	}, []);

	const showMarkers = useCallback(() => {
		markers.forEach(marker => {
			const newMarker = new kakao.maps.Marker({
				position: marker.latlng,
				title: marker.title,
			});
			newMarker.setMap(map);
		});
	}, [markers, map]);

	// 카카오맵 Object를 가져옴
	useEffect(() => {
		const kakaoMap = getKakaoMapObject();
		setMap(kakaoMap);
	}, [getKakaoMapObject]);

	// 현위치 데이터를 가져온 뒤, 현위치로 지도 이동
	useEffect(() => {
		if (coordinates) {
			const lat = coordinates.latitude;
			const lng = coordinates.longitude;
			const nowLatLng = new kakao.maps.LatLng(lat, lng);
			map.setCenter(nowLatLng);
		}
	}, [coordinates, map]);

	// 지도에 마커 표시
	useEffect(() => {
		showMarkers();
	}, [showMarkers, markers]);

	return <Map />;
};

export default MapContainer;
