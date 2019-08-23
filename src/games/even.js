import startGame from '..';
import random from '../lib';

const isParity = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const greeting = 'Answer "yes" if number even otherwise answer "no".\n';

const getQuestion = () => random(1, 100);

const getAnswer = (question) => (isParity(+question) ? 'yes' : 'no');

export default () => startGame(greeting, getQuestion, getAnswer);
