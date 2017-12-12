import { ui } from '..';

const game = () => {
  ui.printMessage(`${ui.WELCOME_MESSAGE}\n`);
  ui.printHello(ui.getUserName());
};

export default game;
