/* global kakao */
class GeoLocationUtils {
  getAddressByCoordinates = coords => {
    return new Promise((resolve, reject) => {
      const geocoder = new kakao.maps.services.Geocoder();
      const { latitude, longitude } = coords;
      try {
        geocoder.coord2Address(longitude, latitude, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const addressName = result[0].address.address_name;
            resolve(addressName);
          } else {
            reject();
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  };

  getGeoLocation = () => {
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
  };
}

export default new GeoLocationUtils();
