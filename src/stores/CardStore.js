import { observable, set, flow, action } from "mobx";
import axios from "axios";
import { isEmpty } from "lodash";
import CardRepository from "../repositories/CardRepository";
import CardModel from "../models/CardModel";
import GeoLocationUtils from "../utils/GeoLocationUtils";
import RatingsModel from "../models/RatingsModel";

class CardStore {
  @observable cardDatas = [];
  @observable cardDetailData = null;
  @observable userRatingData = null;
  @observable isExistNearCafe = true;
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
    this.postCardRating = flow(this.postCardRating.bind(this));
  }

  @action.bound init() {
    this.cardDatas = [];
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
    if (isEmpty(cardModels)) this.isExistNearCafe = false;
    this.cardDatas = this.cardDatas.concat(cardModels);
    this.pageNumber++;
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

  *postCardRating(user, cardRating) {
    const cardRatings = yield CardRepository.postCardRating(user, cardRating.cafeId, cardRating.tags, cardRating.rating);
    const ratings = new RatingsModel(cardRatings);
    const toUpdateCafeInList = this.cardDatas.find(card => card.id === ratings.cafeId);
    const toUpdateCafeInDetail = this.cardDetailData;
    toUpdateCafeInList.setRating(ratings.points);
    toUpdateCafeInList.updateTags(ratings.tags);
    toUpdateCafeInDetail.setRating(ratings.points);
    toUpdateCafeInDetail.updateTags(ratings.tags);
  }
}

export default CardStore;
