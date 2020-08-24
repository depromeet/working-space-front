/* global kakao */
import { observable, set } from "mobx";
import MapPickerSprite from "../images/icon-mappicker-sprite.png";

const unselectedMarkerImage = new kakao.maps.MarkerImage(MapPickerSprite, new kakao.maps.Size(24, 24), {
  spriteOrigin: new kakao.maps.Point(0, 0),
  spriteSize: new kakao.maps.Size(72, 48),
});

class CardModel {
  @observable id = "Cafe";
  @observable name = "커피베이 가락점";
  @observable brandName = "커피베이";
  @observable address = "서울 송파구 가락동 170-11";
  @observable roadAddress = "서울 송파구 오금로42길 5";
  @observable startHours = "오전 9시";
  @observable endHours = "오후 11시";
  @observable location = [127.122375827317, 37.4995775321982];
  @observable latitude = 37.4995775321982;
  @observable longitude = 127.122375827317;
  @observable homepage = null;
  @observable imageUrl = "https://placehold.it/300x150";
  @observable imageAlt = "카페 이미지";
  @observable rating = 4.5;
  @observable distance = null;
  @observable tags = [
    { name: "study", follow: 12, isSelected: false },
    { name: "concent", follow: 23, isSelected: false },
    { name: "mute", follow: 21, isSelected: false },
    { name: "wifi", follow: 16, isSelected: false },
    { name: "parking", follow: 7, isSelected: false },
    { name: "dessert", follow: 2, isSelected: false },
    { name: "toilet", follow: 3, isSelected: false },
    { name: "twentyFour", follow: 4, isSelected: false },
    { name: "smoking", follow: 5, isSelected: false },
    { name: "timer", follow: 6, isSelected: false },
    { name: "seat", follow: 7, isSelected: false },
    { name: "chair", follow: 1, isSelected: false },
  ];

  constructor(data) {
    const latlng = new kakao.maps.LatLng(data.location.coordinates[1], data.location.coordinates[0]);
    const marker = new kakao.maps.Marker({ title: data.name, position: latlng, image: unselectedMarkerImage, clickable: true });
    set(this, {
      id: data.id,
      name: data.name,
      brandName: data.brand_name,
      address: data.road_addr,
      parcelAddress: data.parcel_addr,
      roadAddress: data.road_addr,
      startHours: data.start_hours,
      endHours: data.end_hours,
      homepage: data.homepage,
      location: data.location.coordinates,
      latitude: data.location.coordinates[1],
      longitude: data.location.coordinates[0],
      marker,
      distance: `${data.dist.calculated.toFixed()}m`,
      imageUrl: `/images/${parseInt(Math.random() * 18, 10) + 1}.jpg`,
      imageAlt: `${data.name}이미지`,
    });
  }
}

export default CardModel;
