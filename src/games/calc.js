import { config, game } from '..';

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
const getRandomOperation = (ops = ['add', 'div', 'multiply']) => {
  if (!(ops instanceof Array) && ops.length === 0) {
    return false;
  }

  return ops[Math.floor(Math.random() * ops.length)];
};

const generateEquation = () => {
  function Equation() {
    this.numbers = [getRandomNumber(), getRandomNumber()];
    this.operation = getRandomOperation();

    return this;
  }
  Equation.prototype.toString = function () {
    const operationsAlphabet = {
      add: '+',
      div: '-',
      multiply: '*',
    };
    const operationSign = operationsAlphabet[this.operation];
    const iter = (numbers, acc) => {
      const current = numbers[acc];
      const newAcc = acc + 1;

      if (typeof numbers[newAcc] === 'undefined') {
        return `${current}`;
      }

      return `${current} ${operationSign} ${iter(numbers, newAcc)}`;
    };

    return iter(this.numbers, 0);
  };
  Equation.prototype.calculate = function () {
    const iter = (numbers, acc) => {
      const current = numbers[acc];
      const newAcc = acc + 1;

      if (typeof numbers[newAcc] === 'undefined') {
        return current;
      }

      if (this.operation === 'add') {
        return current + iter(numbers, newAcc);
      } else if (this.operation === 'div') {
        return current - iter(numbers, newAcc);
      }

      return current * iter(numbers, newAcc);
    };

    return iter(this.numbers, 0);
  };

  return new Equation();
};

config.name = 'brain-calc';
config.task = 'What is the result of the expression?';
config.getQuestion = () => generateEquation();
config.getAnswer = question => String(question.calculate());

export default game;
