import { observable, action } from "mobx";
import CardRepository from "../repositories/CardRepository";
import CardModel from "../models/CardModel";

class CardStore {
  @observable cardDatas = [];

  @action fetchCard(pageNumber) {
    const cards = CardRepository.getCards(pageNumber);
    const cardModels = cards.map(card => new CardModel(card));
    this.cardDatas = this.cardDatas.concat(cardModels);
  }
}

export default CardStore;
