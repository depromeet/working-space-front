/* global kakao */
import { observable, set, action } from "mobx";
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
  @observable rating = 0.0;
  @observable distance = null;

  @observable tags = [
    { id: "study", count: 12, isSelected: false },
    { id: "concent", count: 23, isSelected: false },
    { id: "mute", count: 21, isSelected: false },
    { id: "wifi", count: 16, isSelected: false },
    { id: "parking", count: 7, isSelected: false },
    { id: "dessert", count: 2, isSelected: false },
    { id: "toilet", count: 3, isSelected: false },
    { id: "twentyFour", count: 4, isSelected: false },
    { id: "smoking", count: 5, isSelected: false },
    { id: "timer", count: 6, isSelected: false },
    { id: "seat", count: 7, isSelected: false },
    { id: "chair", count: 1, isSelected: false },
  ];

  constructor(data) {
    const latlng = new kakao.maps.LatLng(data.location.coordinates[1], data.location.coordinates[0]);
    const marker = new kakao.maps.Marker({ title: data.name, position: latlng, image: unselectedMarkerImage, clickable: true });
    let distance;
    if (data.dist) distance = data.dist.calculated < 1000 ? `${parseInt(data.dist.calculated, 10)}m` : `${(parseInt(data.dist.calculated, 10) / 1000).toFixed(1)}km`;

    set(this, {
      id: data.id,
      dataId: data.data_id,
      name: data.name,
      brandName: data.brand_name,
      address: data.road_addr,
      parcelAddress: data.parcel_addr,
      roadAddress: data.road_addr,
      startHours: data.start_hours,
      endHours: data.end_hours,
      homepage: data.homepage,
      location: data.location.coordinates,
      distance,
      imageUrl: [`/images/${parseInt(Math.random() * 18, 10) + 1}.jpg`, `/images/1.jpg`, `/images/2.jpg`],
      latitude: data.location.coordinates[1],
      longitude: data.location.coordinates[0],
      marker,
      imageAlt: `${data.name}이미지`,
      tags: data.tags,
      rating: data.points,
    });
  }

  @action setRating(rating) {
    this.rating = Number(rating).toFixed(1);
  }

  @action updateTags(tagIds) {
    tagIds.map(tagId => {
      const savedTag = this.tags.find(tag => tag.id === tagId);
      if (savedTag) {
        return savedTag.count++;
      }
      return this.tags.push({ id: tagId, count: 1, isSelected: false });
    });
  }
}

export default CardModel;
