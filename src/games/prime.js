import random from '../lib';

const isPrime = (number) => {
  if (number < 1) {
    return 'no';
  }

  const iter = (divisor) => {
    if (divisor === number) {
      return 'yes';
    }
    if (number % divisor === 0) {
      return 'no';
    }
    return iter(divisor + 1);
  };

  return iter(2);
};

export const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

export const getQuestion = () => {
  const number = random(1, 500);
  const question = `${number}`;
  return question;
};

export const getAnswer = (question) => isPrime(+question);
