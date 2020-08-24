import { observable, set, flow } from "mobx";
import axios from "axios";
import CardRepository from "../repositories/CardRepository";
import CardModel from "../models/CardModel";
import GeoLocationUtils from "../utils/GeoLocationUtils";

class CardStore {
  @observable cardDatas = [];
  @observable cardDataCount = 1;
  @observable cardDetailData = null;
  @observable pageNumber = 1;
  @observable latitude = null;
  @observable longitude = null;
  @observable isLoading = {
    fetchCard: false,
  };

  constructor() {
    this.fetchCard = flow(this.fetchCard.bind(this));
    this.fetchCardDetail = flow(this.fetchCardDetail.bind(this));
  }

  *fetchCard(page) {
    if (this.isLoading.fetchCard) return;

    this.isLoading.fetchCard = true;
    const coordinates = yield GeoLocationUtils.getGeoLocation();
    if (page === 1) {
      const cards = yield CardRepository.getCards(page, coordinates.latitude, coordinates.longitude);
      const cardModels = cards.map(card => new CardModel(card));
      set(this, { cardDatas: cardModels });
    } else {
      const cards = yield CardRepository.getCards(this.pageNumber, coordinates.latitude, coordinates.longitude);
      const cardModels = cards.map(card => new CardModel(card));
      set(this, { cardDatas: this.cardDatas.concat(cardModels) });
    }
    this.pageNumber++;
    this.cardDataCount = this.cardDatas.length;
    this.isLoading.fetchCard = false;
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
