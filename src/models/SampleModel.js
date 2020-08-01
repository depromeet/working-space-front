import { observable, action, computed, set } from 'mobx';

class SampleModel {
	@observable name;
	@observable email;
	@observable card;

	constructor({ name, email, card }) {
		set(this, { name, email, card });
	}

	@computed get nameAndEmail() {
		return this.name + this.email;
	}

	@action init() {
		this.name = '심재철';
		this.email = 'simsimjae@naver.com';
		this.card = 'card';
	}
}

export default SampleModel;
