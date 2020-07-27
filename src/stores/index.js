import SampleStore from './SampleStore';
import { createContext } from 'react';

class RootStore {
	constructor() {
		this.SampleStore = new SampleStore();
	}
}
const rootStoreContext = createContext(new RootStore());

export default rootStoreContext;
