const errorHandler = require('./errorHandler');


module.exports = errorHandler((red, blue) => {
  const res = [];
  let counterRed = 0;
  let counterBlue = 0;
  let prevB = null;
  let prevR = null;

  while (red.length !== counterRed && blue.length !== counterBlue) {
    const diff = (prevR || red[counterRed]) - (prevB || blue[counterBlue]);

    if (diff < 0) {
      prevB = -diff;
      res.push(`${red[counterRed]} from ${counterRed + 1} red bottle to ${counterBlue + 1} blue bottle`);
      counterRed += 1;
      prevR = null;
    } else if (diff > 0) {
      prevR = diff;
      res.push(`${blue[counterBlue]} from ${counterRed + 1} red bottle to ${counterBlue + 1} blue bottle`);
      counterBlue += 1;
      prevB = null;
    } else if (diff === 0) {
      res.push(`${red[counterRed]} from ${counterRed + 1} red bottle to ${counterBlue + 1} blue bottle`);
      prevR = null;
      prevB = null;
      counterRed += 1;
      counterBlue += 1;
    }
  }
  return res;
});
