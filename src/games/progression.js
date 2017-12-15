import { game } from '..';
import math from '../math/math';

const progressionGenerator = () => {
  const length = 10;
  const startFrom = math.getRandomNumber(1, 100);
  const dNumber = math.getRandomNumber(1, 5);
  const resultProgression = [];

  const fillProgression = (progression, start, acc = 0) => {
    const newStart = start + dNumber;
    progression.push(newStart);

    if (acc === length - 1) {
      return progression;
    }

    return fillProgression(progression, newStart, acc + 1);
  };

  return fillProgression(resultProgression, startFrom, 0);
};

// progressionGame
const progressionGame = () => {
  const task = 'What number is missing in this progression?';
  const getQuestionData = () => {
    const progression = progressionGenerator();
    const progressionHiddenItemIndex = math.getRandomNumber(0, progression.length - 1);
    const answer = String(progression[progressionHiddenItemIndex]);
    progression[progressionHiddenItemIndex] = '..';

    const question = progression.join(' ');

    return { question, answer };
  };

  return game(task, getQuestionData);
};

export default progressionGame;
