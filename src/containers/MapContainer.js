/* global kakao */
import React, { useState, useEffect, useCallback } from 'react';
import Map from '../components/Map/Map';

const MapContainer = () => {
	const [map, setMap] = useState(null);
	const [markers, setMarkers] = useState([]);

	const getKakaoMapObject = useCallback(() => {
		const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(37.506502, 127.053617),
			level: 3,
		};

		const kakaoMap = new window.kakao.maps.Map(container, options);
		return kakaoMap;
	}, []);

	useEffect(() => {
		const kakaoMap = getKakaoMapObject();
		setMap(kakaoMap);
	}, [getKakaoMapObject]);

	return <Map />;
};

export default MapContainer;
