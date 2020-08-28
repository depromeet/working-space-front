import { observable, set } from "mobx";

class RatingsModel {
  @observable ratingId = "";
  @observable cafeId = "";
  @observable userId = "";
  @observable points = "4.5";
  @observable tags = [];
  @observable createTime = "";
  @observable updateTime = "";
  constructor(data) {
    set(this, {
      ratingId: data.user_id + data.cafe_id,
      cafeId: data.cafe_id,
      userId: data.user_id,
      points: data.points,
      tags: data.tags,
      createTime: data.create_dt,
      updateTime: data.update_dt,
    });
  }
}
export default RatingsModel;
