import random from '../lib';

const countDivisor = (...operands) => {
  const [a, b] = operands;
  console.log(a, b);
  const [operand1, operand2] = [+a, +b];

  const iter = (divisor) => {
    if ((operand1 % divisor === 0) && (operand2 % divisor === 0)) {
      return divisor;
    }
    return iter(divisor - 1);
  };

  return iter(Math.min(operand1, operand2));
};

export const greeting = 'Find the greatest common divisor of given numbers.\n';

export const getQuestion = () => {
  const number1 = random(1, 100);
  const number2 = random(1, 500);
  const question = `${number1} ${number2}`;
  return question;
};

export const getAnswer = (question) => `${countDivisor(...question.split(' '))}`;
