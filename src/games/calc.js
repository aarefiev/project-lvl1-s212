import { config, game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const getRandomOperation = (ops = ['add', 'div', 'multiply']) => {
  if (!(ops instanceof Array) && ops.length === 0) {
    return false;
  }

  return ops[Math.floor(Math.random() * ops.length)];
};

const equationToString = (numbers, operation) => {
  const operationsAlphabet = {
    add: '+',
    div: '-',
    multiply: '*',
  };
  const operationSign = operationsAlphabet[operation];
  const iter = (iterNumbers, acc) => {
    const current = iterNumbers[acc];
    const newAcc = acc + 1;

    if (typeof iterNumbers[newAcc] === 'undefined') {
      return `${current}`;
    }

    return `${current} ${operationSign} ${iter(iterNumbers, newAcc)}`;
  };

  return iter(numbers, 0);
};
const calculateEquation = (numbers, operation) => {
  const iter = (iterNumbers, acc) => {
    const current = numbers[acc];
    const newAcc = acc + 1;

    if (typeof iterNumbers[newAcc] === 'undefined') {
      return current;
    }

    if (operation === 'add') {
      return current + iter(iterNumbers, newAcc);
    } else if (operation === 'div') {
      return current - iter(iterNumbers, newAcc);
    }

    return current * iter(iterNumbers, newAcc);
  };

  return iter(numbers, 0);
};
const generateEquation = () => {
  function Equation() {
    this.numbers = [getRandomNumber(), getRandomNumber()];
    this.operation = getRandomOperation();

    return this;
  }
  Equation.prototype.toString = function () {
    return equationToString(this.numbers, this.operation);
  };
  Equation.prototype.calculate = function () {
    return calculateEquation(this.numbers, this.operation);
  };

  return new Equation();
};

config.name = 'brain-calc';
config.task = 'What is the result of the expression?';
config.questionGenerator = () => {
  const question = generateEquation();
  const answer = String(question.calculate());

  return new QuestionGenerator(question, answer);
};

export default game;
