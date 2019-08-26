import startGame from '..';
import random from '../utils';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const greeting = 'Answer "yes" if number even otherwise answer "no".';

const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const getData = () => {
  const number = random(1, 100);

  const result = {
    question: number,
    correctAnswer: getAnswer(number),
  };
  return result;
};

export default () => startGame(greeting, getData);
