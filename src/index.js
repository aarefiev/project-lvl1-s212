import readlineSync from 'readline-sync';

const getUserAnswer = answer => readlineSync.question(answer);
const printMessage = (message) => {
  if (message.length === 0) {
    return false;
  }

  return console.log(message);
};

// welcomeGame
const welcomeGame = () => {
  printMessage('\nWelcome to the Brain Games!');

  const userName = getUserAnswer('\nMay I have your name? ');

  printMessage(`Hello, ${userName}!\n`);
  return true;
};

// Game
const game = (task, questionGenerator, attemptsNumber = 3) => {
  printMessage('\nWelcome to the Brain Games!');
  printMessage(`${task}`);

  const userName = getUserAnswer('\nMay I have your name? ');

  printMessage(`Hello, ${userName}!\n`);

  let attemptNumber = 0;

  while (attemptNumber < attemptsNumber) {
    const questionData = questionGenerator();

    printMessage(`Question: ${questionData.question}`);

    const userAnswer = getUserAnswer('Your answer: ');

    if (userAnswer !== questionData.answer) {
      printMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questionData.answer}'. \nLet's try again, ${userName}!`);
      break;
    }

    printMessage('Correct!');
    attemptNumber += 1;
  }

  if (attemptNumber === attemptsNumber) {
    printMessage(`Congratulations, ${userName}!`);
  }

  return true;
};

export { game, welcomeGame };
