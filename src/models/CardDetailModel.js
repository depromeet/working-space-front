import { observable, set } from "mobx";

class CardDetailModel {
  @observable id = "Cafe";
  @observable name = "커피베이 가락점";
  @observable brandName = "커피베이";
  @observable address = "서울 송파구 가락동 170-11";
  @observable roadAddress = "서울 송파구 오금로42길 5";
  @observable phone;
  @observable startHours = "오전 9시";
  @observable endHours = "오후 11시";
  @observable location = [127.122375827317, 37.4995775321982];
  @observable homepage = null;
  @observable imageUrl = "https://placehold.it/300x150";
  @observable imageAlt = "카페 이미지";
  @observable rating = 4.5;
  @observable tagCount = 0;
  @observable tags = null;

  constructor(data) {
    set(this, {
      id: data.id,
      name: data.name,
      brandName: data.brand_name,
      address: data.parcel_addr,
      roadAddress: data.road_addr,
      phone: data.phone,
      startHours: data.start_hours,
      endHours: data.end_hours,
      homepage: data.homepage,
      location: data.location.coordinates,
      imageUrl: [`/images/1.jpg`, `/images/2.jpg`, `/images/3.jpg`],
      imageAlt: `${data.name}이미지`,
    });
  }
}

export default CardDetailModel;
