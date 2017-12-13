import { config, game } from '..';

const isEvenNumber = num => ((Number.isInteger(num) && num % 2 === 0) ? 'yes' : 'no');
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

config.name = 'brain-even';
config.task = 'Answer "yes" if number even otherwise answer "no".';
config.getQuestion = () => getRandomNumber();
config.getAnswer = question => isEvenNumber(question);

export default game;
