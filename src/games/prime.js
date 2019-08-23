import startGame from '..';
import random from '../lib';

const isPrime = (number) => {
  if (number < 1) {
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

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const getQuestion = () => random(1, 500);

const getAnswer = (question) => (isPrime(+question) ? 'yes' : 'no');

export default () => startGame(greeting, getQuestion, getAnswer);
