import { config, game } from '..';

const isEvenNumber = (num) => ((Number.isInteger(num) && num % 2 === 0) ? 'yes' : 'no');
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

config.name = 'brain-even';
config.task = 'What is the result of the expression?';
config.getQuestion = () => getRandomNumber();
config.getAnswer = (question) => isEvenNumber(question);

export default game;
