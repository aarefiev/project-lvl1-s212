import { game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const getRandomOperation = () => {
  const operations = ['add', 'div', 'multiply'];

  return operations[Math.floor(Math.random() * operations.length)];
};

const equationToString = (equation) => {
  const operationsAlphabet = {
    add: '+',
    div: '-',
    multiply: '*',
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
    } else if (equation.operation === 'div') {
      return current - iter(iterNumbers, newAcc);
    }

    return current * iter(iterNumbers, newAcc);
  };

  return iter(equation.numbers, 0);
};
const equationGenerator = () => {
  const numbers = [getRandomNumber(), getRandomNumber()];
  const operation = getRandomOperation();

  return { numbers, operation };
};

// calcGame
const calcGame = () => {
  const task = 'What is the result of the expression?';
  const questionGenerator = () => {
    const equation = equationGenerator();
    const question = equationToString(equation);
    const answer = String(calculateEquation(equation));

    return new QuestionGenerator(question, answer);
  };

  return game(task, questionGenerator);
};

export default calcGame;
