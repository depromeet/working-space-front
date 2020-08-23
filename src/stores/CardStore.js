import { observable, set, flow } from "mobx";
import axios from "axios";
import CardRepository from "../repositories/CardRepository";
import CardModel from "../models/CardModel";
import GeoLocationUtils from "../utils/GeoLocationUtils";

class CardStore {
  @observable cardDatas = [];
  @observable cardDetailData = null;
  @observable pageNumber = 1;
  @observable latitude = null;
  @observable longitude = null;
  @observable isLoading = {
    fetchCard: false,
    fetchCardOnce: false,
  };

  constructor() {
    this.fetchCard = flow(this.fetchCard.bind(this));
    this.fetchCardOnce = flow(this.fetchCardOnce.bind(this));
    this.fetchCardDetail = flow(this.fetchCardDetail.bind(this));
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

  *fetchCardOnce() {
    if (this.isLoading.fetchCardOnce) return;

    this.isLoading.fetchCardOnce = true;
    const coordinates = yield GeoLocationUtils.getGeoLocation();
    const cards = yield CardRepository.getCards(1, coordinates.latitude, coordinates.longitude);
    const cardModels = cards.map(card => new CardModel(card));
    set(this, { cardDatas: cardModels });
  }

  *fetchCardDetail(cardId) {
    set(this, { cardDetailData: null });

    try {
      const cardDetail = yield CardRepository.getCardDetail(cardId);
      const cardDetailModels = new CardModel(cardDetail);
      set(this, { cardDetailData: cardDetailModels });
    } catch (error) {
      if (axios.isCancel(error)) {
        set(this, { cardDetailData: null });
      } else {
        console.log(error);
      }
    }
  }
}

export default CardStore;
