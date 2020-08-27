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
          position => {
            // const { coords } = position;
            const coords = {
              latitude: 37.490095,
              longitude: 127.02761,
            };
            resolve(coords);
          },
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
