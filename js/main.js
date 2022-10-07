function getRandomIntegerNumber(min, max) {
  if (isNaN(Number(min)) || isNaN(Number(max)) || min < 0 || min >= max) {
    throw new Error('Задан неверный диапазон');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntegerNumber(3, 10);

function checkMaxLength(str, maxLength) {
  return str.length <= maxLength;
}

checkMaxLength('test', 10);
