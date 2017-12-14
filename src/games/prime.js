import { game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
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
  const questionGenerator = () => {
    const question = getRandomNumber();
    const answer = getCorrectAnswer(question);

    return new QuestionGenerator(question, answer);
  };

  return game(task, questionGenerator);
};

export default primeGame;
