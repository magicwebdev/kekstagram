function getRandomNumber(min, max) {
  if (isNaN(Number(min)) || isNaN(Number(max)) || min < 0 || min >= max) {
    throw new Error('Неверный диапазон');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(3, 10);

function checkMaxLength(str, maxLength) {
  return str.length <= maxLength;
}

checkMaxLength('test', 10);
