import { observable, set, flow } from "mobx";
import axios from "axios";
import CardRepository from "../repositories/CardRepository";
import CardModel from "../models/CardModel";

class CardStore {
  @observable cardDatas = [];
  @observable cardDetailData = null;

  constructor() {
    this.fetchCard = flow(this.fetchCard.bind(this));
    this.fetchCardDetail = flow(this.fetchCardDetail.bind(this));
  }

  *fetchCard(pageNumber) {
    const cards = yield CardRepository.getCards(pageNumber);
    const cardModels = cards.map(card => new CardModel(card));
    set(this, { cardDatas: this.cardDatas.concat(cardModels) });
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
