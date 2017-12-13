import readlineSync from 'readline-sync';

// // UI functions
// const WELCOME_MESSAGE = 'Welcome to the Brain Games!';
//
// const printMessage = message => console.log(message);
// const printHello = userName => printMessage(`Hello, ${userName}!\n`);
// const printQuestion = details => printMessage(`Question: ${details}`);
// const printRight = () => printMessage('Correct!');
// const printWrong = (answer, rightAnswer, userName) => {
//   const message = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`;
//
//   return printMessage(message);
// };
// const printCongrat = userName => printMessage(`Congratulations, ${userName}!`);
//
// const getUserAnswer = answer => readlineSync.question(answer);
// const getUserName = () => getUserAnswer('May I have your name? ');
// const getGameUserAnswer = (question = '') => {
//   printQuestion(question);
//   return getUserAnswer('Your answer: ');
// };
//
// // Math functions
// const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
// const getRandomOperation = (ops = ['add', 'div', 'multiply']) => {
//   if (!(ops instanceof Array) && ops.length === 0) {
//     return false;
//   }
//
//   return ops[Math.floor(Math.random() * ops.length)];
// };


const getUserAnswer = answer => readlineSync.question(answer);
const printMessage = message => console.log(message);

const config = {
  name: 'game',
  task: '',
  attemptsNumber: 3,
  getQuestion: null,
  getAnswer: null,
};

// Game
const game = () => {
  printMessage('\nWelcome to the Brain Games!');

  if (config.task.length !== 0) {
    printMessage(`${config.task}`);
  }

  const userName = getUserAnswer('\nMay I have your name? ');

  printMessage(`Hello, ${userName}!\n`);

  if (config.getQuestion !== null) {
    let attemptNumber = 0;

    while (attemptNumber < config.attemptsNumber) {
      const question = config.getQuestion();
      const answer = config.getAnswer(question);

      printMessage(`Question: ${question}`);

      const userAnswer = getUserAnswer('Your answer: ');

      if (userAnswer !== answer) {
        printMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${userName}!`);
        break;
      }

      printMessage('Correct!');
      attemptNumber += 1;
    }

    if (attemptNumber === config.attemptsNumber) {
      printMessage(`Congratulations, ${userName}!`);
    }
  }

  return;
}

export { config, game };
