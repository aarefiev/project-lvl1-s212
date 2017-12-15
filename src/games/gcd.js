import { game } from '..';
import math from '../math/math';

const calculateGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return calculateGCD(num2, num1 % num2);
};

// gcdGame
const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const getQuestionData = () => {
    const num1 = math.getRandomNumber();
    const num2 = math.getRandomNumber();
    const question = `${num1} ${num2}`;
    const answer = String(calculateGCD(num1, num2));

    return { question, answer };
  };

  return game(task, getQuestionData);
};

export default gcdGame;
