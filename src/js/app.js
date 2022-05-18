import GameSavingLoader from './GameSavingLoader';
import GameSaving from './gameSaving';

GameSavingLoader.load().then((saving) => {
  const { id, created, userInfo } = JSON.parse(saving);
  return new GameSaving(id, created, userInfo.id, userInfo.name, userInfo.level, userInfo.points);
}, (error) => {
  throw error;
});
