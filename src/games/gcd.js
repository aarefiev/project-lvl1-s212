import { game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const numbersToString = numbers => numbers.join(' ');
const calculateGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return calculateGCD(num2, num1 % num2);
};
const numbersGenerator = () => [getRandomNumber(), getRandomNumber()];

// gcdGame
const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const questionGenerator = () => {
    const numbers = numbersGenerator();
    const question = numbersToString(numbers);
    const answer = String(calculateGCD(numbers[0], numbers[1]));

    return new QuestionGenerator(question, answer);
  };

  return game(task, questionGenerator);
};

export default gcdGame;
