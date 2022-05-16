import Daemon from '../Daemon';

test('Рассчитаем силу урона', () => {
  const demon = new Daemon();
  demon.attack = 100;
  demon.distance = 3;
  demon.stoned = true;
  demon.getForce();
  expect(demon.attack).toBe(72);
});
