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
        tags: [
          { name: "study", follow: 12, isSelected: false },
          { name: "concent", follow: 23, isSelected: false },
          { name: "mute", follow: 21, isSelected: false },
          { name: "wifi", follow: 16, isSelected: false },
          { name: "parking", follow: 7, isSelected: false },
          { name: "dessert", follow: 2, isSelected: false },
          { name: "toilet", follow: 3, isSelected: false },
          { name: "twentyFour", follow: 4, isSelected: false },
          { name: "smoking", follow: 5, isSelected: false },
          { name: "timer", follow: 6, isSelected: false },
          { name: "seat", follow: 7, isSelected: false },
          { name: "chair", follow: 1, isSelected: false },
        ],
      }));
  }
}

export default CardRepository;
