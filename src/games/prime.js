import { game } from '..';
import math from '../math/math';

const isPrimeNumber = (number) => {
  const iter = (num, halfNum) => {
    if (halfNum === 0 || num === 1) {
      return true;
    }

    if (num % halfNum === 0 && halfNum !== 1) {
      return false;
    }

    return iter(num, halfNum - 1);
  };

  return iter(number, Math.round(Math.sqrt(number)));
};
const getCorrectAnswer = num => (isPrimeNumber(num) ? 'yes' : 'no');

// primeGame
const primeGame = () => {
  const task = 'Is this number prime?';
  const getQuestionData = () => {
    const question = math.getRandomNumber();
    const answer = getCorrectAnswer(question);

    return { question, answer };
  };

  return game(task, getQuestionData);
};

export default primeGame;
