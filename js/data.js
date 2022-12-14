import {getRandomIntegerNumber, getRandomArrayElement} from './util.js';

const NAMES = ['Александр', 'Влад', 'Виталик', 'Игорь', 'Сергей', 'Иван'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTOS_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 1;
const COMMENTS_MAX = 6;

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${id}.svg`,
  message: Array.from({length: getRandomIntegerNumber(1, 2)},
    () => getRandomArrayElement(MESSAGES)).join(' '),
  name: getRandomArrayElement(NAMES)
});

function createPhoto(id) {
  return {
    id,
    url: `photos/${id}.jpg`,
    description: 'Описание фотографии',
    likes: getRandomIntegerNumber(LIKES_MIN, LIKES_MAX),
    comments: Array.from({length: getRandomIntegerNumber(COMMENTS_MIN, COMMENTS_MAX)},
      (_, index) => createComment(index + 1))
  };
}

const getPhotos = () => Array.from({length: PHOTOS_COUNT},
  (_, index) => createPhoto(index + 1));

export {getPhotos};
