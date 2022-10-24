function getRandomIntegerNumber(a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkMaxLength(str, maxLength) {
  return str.length <= maxLength;
}

getRandomIntegerNumber(0, 3);
checkMaxLength('test', 10);
