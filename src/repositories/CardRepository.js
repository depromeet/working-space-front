import AxiosUtils from "../utils/AxiosUtils";

class CardRepository {
  URL_GET_CARDS = null;

  async getCards(pageNumber = 1) {
    const result = await AxiosUtils.get(this.URL_GET_CARDS ? this.URL_GET_CARDS : `/cafes/?page=${pageNumber}`);
    this.URL_GET_CARDS = result.next;
    return result.data.results;
  }
}

export default new CardRepository();
