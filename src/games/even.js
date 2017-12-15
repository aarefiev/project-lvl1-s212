import { game } from '..';
import math from '../math/math';

const isEvenNumber = num => Number.isInteger(num) && num % 2 === 0;
const getCorrectAnswer = num => (isEvenNumber(num) ? 'yes' : 'no');

// evenGame
const evenGame = () => {
  const task = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestionData = () => {
    const question = math.getRandomNumber();
    const answer = getCorrectAnswer(question);

    return { question, answer };
  };

  return game(task, getQuestionData);
};

export default evenGame;
