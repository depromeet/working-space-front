import { createContext } from "react";
import SampleStore from "./SampleStore";
import CardStore from "./CardStore.js";

class RootStore {
  constructor() {
    this.SampleStore = new SampleStore();
    this.CardStore = new CardStore();
  }
}
const rootStoreContext = createContext(new RootStore());

export default rootStoreContext;
