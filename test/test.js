const calculateBottles = require('../index.js');
const assert = require('chai').assert;

describe('calculateBottles', () => {
  it('Переливает воду из красных бутылок в синие', () => {
    assert.equal(calculateBottles([1], [1])[0], '1 from 1 red bottle to 1 blue bottle');
    assert.equal(calculateBottles([1, 2], [1])[0], '1 from 1 red bottle to 1 blue bottle');
    assert.equal(calculateBottles([1, 2], [1, 1])[0], '1 from 1 red bottle to 1 blue bottle');
    assert.equal(calculateBottles([1, 2], [1, 1])[1], '1 from 2 red bottle to 2 blue bottle');
    assert.equal(calculateBottles([90], [1, 1])[0], '1 from 1 red bottle to 1 blue bottle');
  });
  it('Выбрасывает ошибку при отсутствии аргументов', () => {
    assert.equal(calculateBottles([2]) instanceof Error, true);
  });

  it('Выбрасывает ошибку, если один или оба аргумента не являются массивами', () => {
    assert.equal(calculateBottles(1, 4) instanceof Error, true);
  });
  it('Возвращает массив', () => {
    assert.isArray(calculateBottles([1], [1]));
  });

});
