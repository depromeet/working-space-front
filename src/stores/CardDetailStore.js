import { observable, action, runInAction } from "mobx";
import axios from "axios";
import CardRepository from "../repositories/CardRepository";
import CardDetailModel from "../models/CardDetailModel";

class CardDetailStore {
  @observable cardDetailData = null;

  @action
  async fetchCardDetail(cardId) {
    runInAction(() => {
      this.cardDetailData = null;
    });

    try {
      const card = await CardRepository.getCardDetail(cardId);
      const cardDetailModel = new CardDetailModel(card);

      runInAction(() => {
        this.cardDetailData = cardDetailModel;
      });
    } catch (error) {
      if (axios.isCancel(error)) {
        runInAction(() => {
          this.cardDetailData = null;
        });
      } else {
        console.log(error);
      }
    }
  }
}

export default CardDetailStore;
