import { game } from '..';
import math from '../math/math';

const getRandomOperation = () => {
  const operations = ['add', 'sub', 'mult'];

  return operations[Math.floor(Math.random() * operations.length)];
};

const equationToString = (equation) => {
  const operationsAlphabet = {
    add: '+',
    sub: '-',
    mult: '*',
  };
  const operationSign = operationsAlphabet[equation.operation];

  return equation.numbers.join(` ${operationSign} `);
};
const calculateEquation = (equation) => {
  const iter = (iterNumbers, acc) => {
    const current = iterNumbers[acc];
    const newAcc = acc + 1;

    if (newAcc > iterNumbers.length - 1) {
      return current;
    }

    if (equation.operation === 'add') {
      return current + iter(iterNumbers, newAcc);
    } else if (equation.operation === 'sub') {
      return current - iter(iterNumbers, newAcc);
    }

    return current * iter(iterNumbers, newAcc);
  };

  return iter(equation.numbers, 0);
};
const equationGenerator = () => {
  const numbers = [math.getRandomNumber(), math.getRandomNumber()];
  const operation = getRandomOperation();

  return { numbers, operation };
};

// calcGame
const calcGame = () => {
  const task = 'What is the result of the expression?';
  const getQuestionData = () => {
    const equation = equationGenerator();
    const question = equationToString(equation);
    const answer = String(calculateEquation(equation));

    return { question, answer };
  };

  return game(task, getQuestionData);
};

export default calcGame;
