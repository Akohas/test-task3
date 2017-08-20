module.exports = (func) => {
  return (red, blue) => {
    if (!Array.isArray(red) || !Array.isArray(red)) {
      return new Error('один или оба аргумента не являются массивами');
    }
    if (!red || !blue) {
      return new Error('отсутсвует один из или оба аргумента');
    }
    return func.call(this, red, blue);
  };
};
