import { observable, action, set } from "mobx";

class CardModel {
  @observable id;
  @observable title;
  @observable location;
  @observable imageUrl;
  @observable imageAlt;
  @observable distance;
  @observable rating;

  constructor({ id, title, location, imageUrl, imageAlt, distance, rating }) {
    set(this, { id, title, location, imageUrl, imageAlt, distance, rating });
  }

  @action init() {
    this.id = 0;
    this.title = "이름";
    this.location = "주소";
    this.imageUrl = "이미지 경로";
    this.imageAlt = "이미지 설명";
    this.distance = "떨어진 거리";
    this.rating = 4.5;
  }
}

export default CardModel;
