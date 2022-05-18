export default class GameSaving {
  constructor(id, created, userId, name, level, points) {
    this.id = id;
    this.created = created;
    this.userInfo = {};
    this.userInfo.id = userId;
    this.userInfo.name = name;
    this.userInfo.level = level;
    this.userInfo.points = points;
  }
}
