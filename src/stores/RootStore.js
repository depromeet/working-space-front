import SampleStore from './SampleStore';

class RootStore {
	constructor() {
		this.SampleStore = new SampleStore();
	}
}

export default new RootStore();
