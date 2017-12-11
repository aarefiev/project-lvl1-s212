#!/usr/bin/env node

import getUserName, {
  getRandomNumber,
  getIsEvenNumberAnswer,
  getIsEvenNumberUserAnswer } from '..';

console.log('Welcome to the Brain Games!\n.' +
            'Answer "yes" if number even otherwise answer "no".\n');

const userName = getUserName();

console.log(`Hello, ${userName}!\n`);

let questionsCount = 3;

while (questionsCount > 0) {
  const num = getRandomNumber();
  const answer = getIsEvenNumberAnswer(num);
  const userAnswer = getIsEvenNumberUserAnswer(num);

  if (answer !== userAnswer) {
    console.log(`${userAnswer} is wrong answer ;(.` +
                `Correct answer was '${answer}'.\n` +
                `Let's try again, ${userName}!`);
    break;
  }

  console.log('Correct!');
  questionsCount -= 1;
}

if (questionsCount === 0) {
  console.log(`Congratulations, ${userName}!`);
}
