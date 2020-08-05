import { observable, action } from "mobx";
import CardRepository from "../repositories/CardRepository";
import CardModel from "../models/CardModel";

class CardStore {
  @observable cardList = [];

  @action fetchCard() {
    // 초기화 필요
    const cards = CardRepository.findCard().params;
    cards.map(card => this.cardList.push(new CardModel(card)));
  }
}

export default CardStore;
