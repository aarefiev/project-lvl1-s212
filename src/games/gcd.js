import { config, game } from '..';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
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
    const iter = (numbers, acc) => {
      const current = numbers[acc];
      const newAcc = acc + 1;

      if (typeof numbers[newAcc] === 'undefined') {
        return `${current}`;
      }

      return `${current} ${iter(numbers, newAcc)}`;
    };

    return iter(this.numbers, 0);
  };
  Numbers.prototype.calculate = function () {
    const iter = (n1, n2) => {
      if (n2 === 0) {
        return n1;
      }

      return iter(n2, n1 % n2);
    };

    return iter(this.numbers[0], this.numbers[1]);
  };

  return new Numbers();
};

config.name = 'brain-gcd';
config.task = 'Find the greatest common divisor of given numbers.';
config.getQuestion = () => generateNumbers();
config.getAnswer = question => String(question.calculate());

export default game;
