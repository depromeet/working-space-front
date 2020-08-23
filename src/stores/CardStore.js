import { observable, set, flow } from "mobx";
import CardRepository from "../repositories/CardRepository";
import CardModel from "../models/CardModel";
import GeoLocationUtils from "../utils/GeoLocationUtils";

class CardStore {
  @observable cardDatas = [];
  @observable pageNumber = 1;
  @observable latitude = null;
  @observable longitude = null;
  @observable isLoading = {
    fetchCard: false,
  };

  constructor() {
    this.fetchCard = flow(this.fetchCard.bind(this));
  }

  *fetchCard() {
    if (this.isLoading.fetchCard) return;

    this.isLoading.fetchCard = true;
    const coordinates = yield GeoLocationUtils.getGeoLocation();
    const cards = yield CardRepository.getCards(this.pageNumber, coordinates.latitude, coordinates.longitude);
    const cardModels = cards.map(card => new CardModel(card));
    set(this, { cardDatas: this.cardDatas.concat(cardModels) });
    this.pageNumber++;
    this.isLoading.fetchCard = false;
  }
}

export default CardStore;
