import faker from 'faker';

class SampleRepository {
	static findUser() {
		return {
			name: faker.name.findName(),
			email: faker.internet.email(),
			card: faker.helpers.createCard(),
		};
	}
}

export default SampleRepository;
