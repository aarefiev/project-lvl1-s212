import { game } from '..';
import QuestionGenerator from '../question_generator/question_generator';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * max) + min;
const progressionGenerator = () => {
  const length = 10;
  const startFrom = getRandomNumber(1, 100);
  const dNumber = getRandomNumber(1, 5);

  const progression = [];
  let acc = 1;

  while (acc <= length) {
    progression.push(startFrom + (dNumber * acc));
    acc += 1;
  }

  return progression;
};

// progressionGame
const progressionGame = () => {
  const task = 'What number is missing in this progression?';
  const questionGenerator = () => {
    const progression = progressionGenerator();
    const progressionHiddenItemIndex = getRandomNumber(0, progression.length - 1);
    const answer = String(progression[progressionHiddenItemIndex]);
    progression[progressionHiddenItemIndex] = '..';

    const question = progression.join(' ');

    return new QuestionGenerator(question, answer);
  };

  return game(task, questionGenerator);
};

export default progressionGame;
