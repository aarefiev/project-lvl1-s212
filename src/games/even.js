import { ui, math } from '..';

const isEvenNumber = num => ((Number.isInteger(num) && num % 2 === 0) ? 'yes' : 'no');
const game = () => {
  ui.printMessage(`${ui.WELCOME_MESSAGE}\nAnswer "yes" if number even otherwise answer "no".\n`);

  const userName = ui.getUserName();
  let questionsCount = 3;

  ui.printHello(userName);

  while (questionsCount > 0) {
    const num = math.getRandomNumber();
    const answer = isEvenNumber(num);
    const userAnswer = ui.getGameUserAnswer(num);

    if (answer !== userAnswer) {
      ui.printWrong(userAnswer, answer, userName);
      break;
    }

    ui.printRight();
    questionsCount -= 1;
  }

  if (questionsCount === 0) {
    ui.printCongrat(userName);
  }
};

export default game;
