import readlineSync from 'readline-sync';

const getUserAnswer = answer => readlineSync.question(answer, '');
const getUserName = () => getUserAnswer('May I have your name? ');

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const isEvenNumber = num => Number.isInteger(num) && num % 2 === 0;
const getIsEvenNumberAnswer = num => (isEvenNumber(num) ? 'yes' : 'no');
const getIsEvenNumberUserAnswer = num => getUserAnswer(`Question: ${num}\nYour answer: `);

export default getUserName;
export {
  getRandomNumber,
  isEvenNumber,
  getIsEvenNumberAnswer,
  getIsEvenNumberUserAnswer };
