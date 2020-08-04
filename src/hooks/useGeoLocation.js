import { useState, useCallback, useEffect } from "react";

const useGeoLocation = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const updateGeoLocation = useCallback(() => {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          // Success
          position => {
            const { coords } = position;
            resolve(coords);
          },
          // Error
          err => {
            reject(err);
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
      const coords = await updateGeoLocation();
      setCurrentCoordinates(coords);
    } catch (err) {
      setError(err);
    }
    setIsFetching(false);
  }, [updateGeoLocation]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    currentCoordinates,
    updateGeoLocation,
    isFetching,
    error,
  };
};

export default useGeoLocation;
