import faker from "faker";

class CardRepository {
  static getCards(pageNumber) {
    console.log(pageNumber);
    return Array(20)
      .fill(null)
      .map(() => ({
        id: faker.random.number(),
        title: faker.company.companyName(),
        location: faker.address.streetAddress(),
        imageUrl: faker.image.city(),
        distance: `${parseFloat(Math.random() * 10).toFixed(2)}km`,
        rating: parseFloat(Math.random() * 5).toFixed(2),
      }));
  }
}

export default CardRepository;
