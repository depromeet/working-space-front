/* global kakao */
import { useState, useCallback, useEffect } from "react";

const useGeoLocation = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState(null);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const getAddressByCoordinates = useCallback(coords => {
    return new Promise((resolve, reject) => {
      const geocoder = new kakao.maps.services.Geocoder();
      const { latitude, longitude } = coords;
      geocoder.coord2Address(longitude, latitude, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const addressName = result[0].address.address_name;
          resolve(addressName);
        } else {
          reject();
        }
      });
    });
  }, []);

  const getGeoLocation = useCallback(() => {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          // Success
          position => {
            // const { coords } = position;
            const coords = {
              latitude: 33.450701,
              longitude: 126.570667,
            };
            resolve(coords);
          },
          // Error
          err => {
            const coords = {
              latitude: 33.450701,
              longitude: 126.570667,
            };
            resolve(coords);
            // reject(err);
          },
        );
      } else {
        reject(new Error("This device is not support to get GeoLocation."));
      }
    });
  }, []);

  const fetch = useCallback(async () => {
    setIsFetching(true);
    try {
      const coords = await getGeoLocation();
      const addressName = await getAddressByCoordinates(coords);
      setCurrentCoordinates(coords);
      setCurrentAddress(addressName);
    } catch (err) {
      console.error(err);
      setError(err);
    }
    setIsFetching(false);
  }, [getGeoLocation, getAddressByCoordinates]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    currentCoordinates,
    currentAddress,
    fetch,
    isFetching,
    error,
  };
};

export default useGeoLocation;
