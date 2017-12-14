import { game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const calculateGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return calculateGCD(num2, num1 % num2);
};

// gcdGame
const gcdGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const questionGenerator = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const question = `${num1} ${num2}`;
    const answer = String(calculateGCD(num1, num2));

    return new QuestionGenerator(question, answer);
  };

  return game(task, questionGenerator);
};

export default gcdGame;
