import readlineSync from 'readline-sync';

const getUserAnswer = answer => readlineSync.question(answer);
const printMessage = message => {
  if (message.length === 0) {
    return false;
  }

  return console.log(message);
};

const config = {
  name: 'game',
  task: '',
  attemptsNumber: 3,
  getQuestion: null,
  getAnswer: null,
};

// Game
const game = () => { 0
  printMessage('\nWelcome to the Brain Games!');
  printMessage(`${config.task}`);

  const userName = getUserAnswer('\nMay I have your name? ');

  printMessage(`Hello, ${userName}!\n`);

  if (config.getQuestion === null) { 1
    return false;
  }

  let attemptNumber = 0;

  while (attemptNumber < config.attemptsNumber) { 1
    const question = config.getQuestion();
    const answer = config.getAnswer(question);

    printMessage(`Question: ${question}`);

    const userAnswer = getUserAnswer('Your answer: ');

    if (userAnswer !== answer) { 2
      printMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${userName}!`);
      break;
      return true;
    }

    printMessage('Correct!');
    attemptNumber += 1;
  }

  if (attemptNumber === config.attemptsNumber) { 1
    printMessage(`Congratulations, ${userName}!`);
  }

  return true;
};

export { config, game };
