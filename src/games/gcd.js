import { ui, math } from '..';

const calculateGCD = (num1, num2) => {
  const iter = (n1, n2) => {
    if (n2 === 0) {
      return n1;
    }

    return iter(n2, n1 % n2);
  };

  if (num1 > num2) {
    return iter(num2, num1);
  }

  return iter(num1, num2);
};

const game = () => {
  ui.printMessage(`${ui.WELCOME_MESSAGE}\nFind the greatest common divisor of given numbers.\n`);

  const userName = ui.getUserName();
  let questionsCount = 3;

  ui.printHello(userName);

  while (questionsCount > 0) {
    const num1 = math.getRandomNumber();
    const num2 = math.getRandomNumber();
    const answer = String(calculateGCD(num1, num2));
    const userAnswer = ui.getGameUserAnswer(`${num1} ${num2}`);

    if (answer !== userAnswer) {
      ui.printWrong(userAnswer, answer, userName);
      break;
    }

    ui.printRight();
    questionsCount -= 1;
  }

  if (questionsCount === 0) {
    ui.printCongrat(userName);
  }
};

export default game;
