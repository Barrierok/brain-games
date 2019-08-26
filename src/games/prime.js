import startGame from '..';
import random from '../utils';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const iter = (divisor) => {
    if (divisor === number) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };

  return iter(2);
};

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const getData = () => {
  const number = random(1, 500);

  const result = {
    question: number,
    correctAnswer: getAnswer(number),
  };
  return result;
};

export default () => startGame(greeting, getData);
