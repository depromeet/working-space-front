import { observable, set, flow } from "mobx";
import CardRepository from "../repositories/CardRepository";
import CardModel from "../models/CardModel";

class CardStore {
  @observable cardDatas = [];

  constructor() {
    this.fetchCard = flow(this.fetchCard.bind(this));
  }

  *fetchCard(pageNumber) {
    const cards = yield CardRepository.getCards(pageNumber);
    const cardModels = cards.map(card => new CardModel(card));
    set(this, { cardDatas: this.cardDatas.concat(cardModels) });
  }
}

export default CardStore;
