import { observable, action } from 'mobx';
import SampleRepository from '../repositories/SampleRepository';
import SampleModel from '../models/SampleModel';

class SampleStore {
	@observable sampleList = [];

	@action fetchSample() {
		const user = SampleRepository.findUser();
		const sampleModel = new SampleModel(user);
		this.sampleList.push(sampleModel);
	}
}

export default SampleStore;
