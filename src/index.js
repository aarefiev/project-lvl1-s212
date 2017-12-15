import readlineSync from 'readline-sync';

const getUserAnswer = question => readlineSync.question(question);
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
const game = (task, getQuestionData, maxQuestionsNumber = 3) => {
  printMessage('\nWelcome to the Brain Games!');
  printMessage(`${task}`);

  const userName = getUserAnswer('\nMay I have your name? ');
  const gameAskQuestions = (questionNumber = 1) => {
    if (questionNumber > maxQuestionsNumber) {
      printMessage(`Congratulations, ${userName}!`);
      return true;
    }

    const questionData = getQuestionData();

    printMessage(`Question: ${questionData.question}`);

    const userAnswer = getUserAnswer('Your answer: ');

    if (userAnswer !== questionData.answer) {
      printMessage(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questionData.answer}'. \nLet's try again, ${userName}!`);
      return false;
    }

    printMessage('Correct!');
    return gameAskQuestions(questionNumber + 1);
  };

  printMessage(`Hello, ${userName}!\n`);
  gameAskQuestions();

  return true;
};

export { game, welcomeGame };
