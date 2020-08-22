import axios from "axios";
import { AxiosUtils, createCancelSource } from "../utils/AxiosUtils";

class CardRepository {
  URL_GET_CARDS = null;
  getCardDetailCancelSource = null;

  async getCards(pageNumber = 1) {
    const result = await AxiosUtils.get(this.URL_GET_CARDS ? this.URL_GET_CARDS : `/cafes/?page=${pageNumber}`);
    this.URL_GET_CARDS = result.next;
    return result.data.results;
  }

  cancelGetCardDetail() {
    if (this.getCardDetailCancelSource !== null) {
      this.getCardDetailCancelSource.cancel();
      this.getCardDetailCancelSource = null;
    }
  }

  getCardDetail = async cardId => {
    this.cancelGetCardDetail();
    this.getCardDetailCancelSource = createCancelSource();

    const result = await AxiosUtils.get(`/cafes/?id=${cardId}`, { cancelToken: this.getCardDetailCancelSource.token });
    return result.data.results[0];
  };
}

export default new CardRepository();
