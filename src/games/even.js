import { config, game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEvenNumber = num => Number.isInteger(num) && num % 2 === 0;
const getCorrectAnswer = num => (isEvenNumber(num) ? 'yes' : 'no');

config.name = 'brain-even';
config.task = 'Answer "yes" if number even otherwise answer "no".';
config.questionGenerator = () => {
  const question = getRandomNumber();
  const answer = getCorrectAnswer(question);

  return new QuestionGenerator(question, answer);
};

export default game;
