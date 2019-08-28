import makeGame from '..';
import random from '../utils';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getData = () => {
  const question = random(1, 100);

  const result = {
    question,
    correctAnswer: isEven(question) ? 'yes' : 'no',
  };
  return result;
};

export default () => makeGame(gameDescription, getData);
