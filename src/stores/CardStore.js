import { observable, set, flow, action } from "mobx";
import axios from "axios";
import CardRepository from "../repositories/CardRepository";
import CardModel from "../models/CardModel";
import GeoLocationUtils from "../utils/GeoLocationUtils";

class CardStore {
  @observable cardDatas = [];
  @observable cardDataCount = 1;
  @observable cardDetailData = null;
  @observable userRatingData = null;
  @observable isUserRatingLoading = false;
  @observable cardRatingData = null;
  @observable pageNumber = 1;
  @observable latitude = null;
  @observable longitude = null;
  @observable isLoading = {
    fetchCard: false,
  };

  constructor() {
    this.fetchCard = flow(this.fetchCard.bind(this));
    this.fetchCardDetail = flow(this.fetchCardDetail.bind(this));
    this.fetchUserRating = flow(this.fetchUserRating.bind(this));
    this.fetchCardRating = flow(this.fetchCardRating.bind(this));
  }

  @action.bound init() {
    this.cardDatas = [];
    this.cardDataCount = 1;
    this.cardDetailData = null;
    this.userRatingData = null;
    this.isUserRatingLoading = false;
    this.pageNumber = 1;
    this.latitude = null;
    this.longitude = null;
    this.isLoading = {
      fetchCard: false,
    };
  }

  *fetchCard(page) {
    if (this.isLoading.fetchCard) return;

    this.isLoading.fetchCard = true;
    const coordinates = yield GeoLocationUtils.getGeoLocation();
    const cards = yield CardRepository.getCards(this.pageNumber, coordinates.latitude, coordinates.longitude);
    const cardModels = cards.map(card => new CardModel(card));
    set(this, { cardDatas: this.cardDatas.concat(cardModels) });
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

  *fetchUserRating(userId, cardId) {
    set(this, { userRatingData: null, isUserRatingLoading: true });

    try {
      const userRating = yield CardRepository.getUserRating(userId, cardId);
      set(this, { userRatingData: userRating, isUserRatingLoading: false });
    } catch (error) {
      if (error.response.status === 404) {
        set(this, { userRatingData: null, isUserRatingLoading: false });
      } else {
        console.log(error);
      }
    }
  }

  *fetchCardRating(user, cardRating) {
    const cardRatings = yield CardRepository.postCardRating(user, cardRating.cafeId, cardRating.tags, cardRating.rating);
    set(this, { cardRatingData: cardRatings });
  }
}

export default CardStore;
