const getRandomIntegerNumber = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkMaxLength = (str, maxLength) => str.length <= maxLength;
checkMaxLength('test', 3);

const getRandomArrayElement = (array) => array[getRandomIntegerNumber(0, array.length - 1)];

export {getRandomIntegerNumber, getRandomArrayElement};
