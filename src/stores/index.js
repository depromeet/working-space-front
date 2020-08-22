import { createContext } from "react";
import CardStore from "./CardStore";
import CardDetailStore from "./CardDetailStore";

class RootStore {
  constructor() {
    this.CardStore = new CardStore();
    this.CardDetailStore = new CardDetailStore();
  }
}
const rootStoreContext = createContext(new RootStore());

export default rootStoreContext;
