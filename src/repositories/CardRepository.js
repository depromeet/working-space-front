import axios from "axios";
import { AxiosUtils, createCancelSource } from "../utils/AxiosUtils";

class CardRepository {
  URL_GET_CARDS = null;
  getCardDetailCancelSource = null;

  async getCards(pageNumber = 1, latitude, longitude) {
    const result = await AxiosUtils.get(this.URL_GET_CARDS ? this.URL_GET_CARDS : `/cafes/?lat=${latitude}&lon=${longitude}&page=${pageNumber}`);
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

    const result = await AxiosUtils.get(`/cafes/${cardId}/`, { cancelToken: this.getCardDetailCancelSource.token });
    return result.data;
  };
}

export default new CardRepository();
