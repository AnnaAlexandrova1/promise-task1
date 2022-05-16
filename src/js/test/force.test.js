import Force from '../Force';

test('Должна проверить дистанцию на равенство 0', () => {
  const mathChar = new Force();
  mathChar.distance = 0;
  mathChar.attack = 100;
  mathChar.getForce();
  expect(mathChar.attack).toBe(100);
});

test('Должна проверить влияние дурмана на силу урона', () => {
  const mathChar = new Force();
  mathChar.distance = 2;
  mathChar.attack = 100;
  mathChar.stoned = false;
  mathChar.getForce();
  expect(mathChar.attack).toBe(90);
});

test('Уровень атаки должен быть >= 0', () => {
  const mathChar = new Force();
  mathChar.attack = 3;
  mathChar.distance = 3;
  mathChar.stoned = true;
  mathChar.getForce();
  expect(mathChar.attack).toBe(0);
});

test('Должна установить значение атаки', () => {
  const mathChar = new Force();
  mathChar.setAttack(75);
  expect(mathChar.attack).toBe(75);
});

test('Должна вернуть значение влияния дурмана', () => {
  const mathChar = new Force();
  mathChar.setStoned(false);
  expect(mathChar.getStoned()).toBe(false);
});

test('Должна установить влияние дурмана', () => {
  const mathChar = new Force();
  mathChar.setStoned(true);
  expect(mathChar.stoned).toBe(true);
});
