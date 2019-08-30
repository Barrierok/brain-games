import makeGame from '..';
import { random } from '../utils';

const isPrime = (number) => {
  const restriction = Math.sqrt(number);

  if (number <= 1) {
    return false;
  }

  const iter = (divisor) => {
    if (divisor > restriction) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };

  return iter(2);
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getData = () => {
  const question = random(1, 500);

  const roundData = {
    question,
    correctAnswer: isPrime(question) ? 'yes' : 'no',
  };
  return roundData;
};

export default () => makeGame(gameDescription, getData);
