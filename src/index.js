import readlineSync from 'readline-sync';

// UI functions
const WELCOME_MESSAGE = 'Welcome to the Brain Games!';

const printMessage = message => console.log(message);
const printHello = userName => printMessage(`Hello, ${userName}!\n`);
const printQuestion = details => printMessage(`Question: ${details}`);
const printRight = () => printMessage('Correct!');
const printWrong = (answer, rightAnswer, userName) => {
  const message = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`;

  return printMessage(message);
};
const printCongrat = userName => printMessage(`Congratulations, ${userName}!`);

const getUserAnswer = answer => readlineSync.question(answer);
const getUserName = () => getUserAnswer('May I have your name? ');
const getGameUserAnswer = (question = '') => {
  printQuestion(question);
  return getUserAnswer('Your answer: ');
};

// Math functions
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const getRandomOperation = (ops = ['add', 'div', 'multiply']) => {
  if (!(ops instanceof Array) && ops.length === 0) {
    return false;
  }

  return ops[Math.floor(Math.random() * ops.length)];
};

export const ui = {
  WELCOME_MESSAGE,
  printMessage,
  printHello,
  printQuestion,
  printRight,
  printWrong,
  printCongrat,
  getUserAnswer,
  getUserName,
  getGameUserAnswer,
};
export const math = {
  getRandomNumber,
  getRandomOperation,
};
