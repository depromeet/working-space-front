import AxiosUtils from "../utils/AxiosUtils";

class CardRepository {
  URL_GET_CARDS = null;

  async getCards(pageNumber = 1, latitude, longitude) {
    const result = await AxiosUtils.get(this.URL_GET_CARDS ? this.URL_GET_CARDS : `/cafes/?page=${pageNumber}&?lat=${latitude}&lon=${longitude}`);
    return result.data.results;
  }
}

export default new CardRepository();
