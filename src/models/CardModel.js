import { observable, set } from "mobx";

class CardModel {
  @observable id;
  @observable title;
  @observable location;
  @observable imageUrl;
  @observable imageAlt;
  @observable distance;
  @observable rating;

  constructor(data) {
    set(this, data);
  }
}

export default CardModel;
