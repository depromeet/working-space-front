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
        imageUrl: `https://placehold.it/320x${parseInt(Math.random() * 150 + 100, 10)}`,
        distance: `${parseFloat(Math.random() * 10).toFixed(1)}km`,
        rating: parseFloat(Math.random() * 5).toFixed(2),
      }));
  }
}

export default CardRepository;
