import { createContext } from "react";
import CardStore from "./CardStore";

class RootStore {
  constructor() {
    this.CardStore = new CardStore();
  }
}
const RootStoreContext = createContext(new RootStore());

export default RootStoreContext;
