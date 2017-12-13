import { game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEvenNumber = num => Number.isInteger(num) && num % 2 === 0;
const getCorrectAnswer = num => (isEvenNumber(num) ? 'yes' : 'no');

// evenGame
const evenGame = () => {
  const task = 'Answer "yes" if number even otherwise answer "no".';
  const questionGenerator = () => {
    const question = getRandomNumber();
    const answer = getCorrectAnswer(question);

    return new QuestionGenerator(question, answer);
  };

  return game(task, questionGenerator);
};

export default evenGame;
