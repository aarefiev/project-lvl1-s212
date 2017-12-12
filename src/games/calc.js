import { ui, math } from '..';

const generateEquation = () => {
  const equation = {
    numbers: [math.getRandomNumber(), math.getRandomNumber()],
    operation: math.getRandomOperation(),
  };

  return equation;
};
const equationToString = (eq) => {
  const operationsAlphabet = {
    add: '+',
    div: '-',
    multiply: '*',
  };
  const operationSign = operationsAlphabet[eq.operation];
  const iter = (numbers, acc) => {
    const current = numbers[acc];
    const newAcc = acc + 1;

    if (typeof numbers[newAcc] === 'undefined') {
      return `${current}`;
    }

    return `${current} ${operationSign} ${iter(numbers, newAcc)}`;
  };

  return iter(eq.numbers, 0);
};
const calcEquation = (eq) => {
  const iter = (numbers, acc) => {
    const current = numbers[acc];
    const newAcc = acc + 1;

    if (typeof numbers[newAcc] === 'undefined') {
      return current;
    }

    if (eq.operation === 'add') {
      return current + iter(numbers, newAcc);
    } else if (eq.operation === 'div') {
      return current - iter(numbers, newAcc);
    }

    return current * iter(numbers, newAcc);
  };

  return iter(eq.numbers, 0);
};

const game = () => {
  ui.printMessage(`${ui.WELCOME_MESSAGE}\nWhat is the result of the expression?\n`);

  const userName = ui.getUserName();
  let questionsCount = 3;

  ui.printHello(userName);

  while (questionsCount > 0) {
    const eq = generateEquation();
    const answer = String(calcEquation(eq));
    const userAnswer = ui.getGameUserAnswer(equationToString(eq));

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
