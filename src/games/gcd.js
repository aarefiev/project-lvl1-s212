import { config, game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const numbersToString = (numbers, acc) => {
  const current = numbers[acc];
  const newAcc = acc + 1;

  if (typeof numbers[newAcc] === 'undefined') {
    return `${current}`;
  }

  return `${current} ${numbersToString(numbers, newAcc)}`;
};
const calculateGCD = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return calculateGCD(num2, num1 % num2);
};
const generateNumbers = () => {
  function Numbers() {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();

    if (num1 > num2) {
      this.numbers = [num2, num1];
    } else {
      this.numbers = [num1, num2];
    }

    return this;
  }
  Numbers.prototype.toString = function () {
    return numbersToString(this.numbers, 0);
  };
  Numbers.prototype.calculate = function () {
    return calculateGCD(this.numbers[0], this.numbers[1]);
  };

  return new Numbers();
};

config.name = 'brain-gcd';
config.task = 'Find the greatest common divisor of given numbers.';
config.questionGenerator = () => {
  const numbers = generateNumbers();

  return new QuestionGenerator(numbers, String(numbers.calculate()));
};

export default game;
