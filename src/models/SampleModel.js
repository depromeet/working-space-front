class SampleModel {
	count = 0;

	get doubleCount() {
		return count * 2;
	}

	setRandomCount() {
		this.count = Math.random();
	}
}
export default SampleModel;
