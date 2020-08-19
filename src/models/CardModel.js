import { observable, set } from "mobx";

class CardModel {
  @observable id = "Cafe";
  @observable name = "커피베이 가락점";
  @observable brandName = "커피베이";
  @observable address = "서울 송파구 오금로34길";
  @observable startHours = "오전 9시";
  @observable endHours = "오후 11시";
  @observable location = "서울특별시 용산구 청파로";
  @observable homepage = null;
  @observable imageUrl = "https://placehold.it/300x150";
  @observable imageAlt = "카페 이미지";
  @observable rating = 4.5;
  @observable tagCount = 7;

  constructor(data) {
    set(this, {
      id: data.id,
      name: data.name,
      brandName: data.brand_name,
      address: data.parcel_addr,
      startHours: data.start_hours,
      endHours: data.end_hours,
      location: JSON.parse(data.location),
      homepage: data.homepage,
      imageUrl: data.img,
      imageAlt: `${data.name}이미지`,
    });
  }
}

export default CardModel;
