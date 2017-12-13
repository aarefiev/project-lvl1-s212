import { game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

const sortNumbers = numbers => numbers.sort((a, b) => a - b);
const getSortedDigitsOfNumber = num => sortNumbers(`${num}`.split(''));
const isBalancedNumber = (num) => {
  const sortedDigits = getSortedDigitsOfNumber(num);
  const firstDigit = Number(sortedDigits[0]);
  const lastDigit = Number(sortedDigits[sortedDigits.length - 1]);

  if (lastDigit - firstDigit > 1) {
    return false;
  }

  return true;
};
const balanceNumber = (num) => {
  if (isBalancedNumber(num)) {
    return Number(getSortedDigitsOfNumber(num).join(''));
  }

  const sortedDigits = getSortedDigitsOfNumber(num);
  const firstDigit = Number(sortedDigits[0]);
  const lastDigit = Number(sortedDigits[sortedDigits.length - 1]);

  sortedDigits[0] = firstDigit + 1;
  sortedDigits[sortedDigits.length - 1] = lastDigit - 1;

  return balanceNumber(sortedDigits.join(''));
};

// balanceGame
const balanceGame = () => {
  const task = 'Balance the given number.';
  const questionGenerator = () => {
    const number = getRandomNumber();

    return new QuestionGenerator(number, String(balanceNumber(number)));
  };

  return game(task, questionGenerator);
};

export default balanceGame;
