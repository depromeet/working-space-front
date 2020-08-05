class CardRepository {
  static findCard() {
    return {
      params: [
        { id: 0, title: "Cafe1", location: "서울특별시 관악구 22길", imageUrl: "https://placehold.it/328x160", imageAlt: "카드 이미지", distance: "2.2km", rating: 4.3 },
        { id: 1, title: "Cafe2", location: "서울특별시 관악구 22길", imageUrl: "https://placehold.it/328x160", imageAlt: "카드 이미지", distance: "3.1km", rating: 4.5 },
        { id: 2, title: "Cafe3", location: "서울특별시 관악구 22길", imageUrl: "https://placehold.it/328x160", imageAlt: "카드 이미지", distance: "4.2km", rating: 4.2 },
        { id: 3, title: "Cafe4", location: "서울특별시 관악구 22길", imageUrl: "https://placehold.it/328x160", imageAlt: "카드 이미지", distance: "5.3km", rating: 3.8 },
      ],
    };
  }
}

export default CardRepository;
