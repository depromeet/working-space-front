import { createContext } from 'react';
import SampleStore from './SampleStore';

class RootStore {
	constructor() {
		this.SampleStore = new SampleStore();
	}
}
const rootStoreContext = createContext(new RootStore());

export default rootStoreContext;
