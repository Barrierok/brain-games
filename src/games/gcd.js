import startGame from '..';
import random from '../lib';

const countGreatestCommonFactor = (a, b) => {
  const [operand1, operand2] = [+a, +b];

  const iter = (divisor) => {
    if ((operand1 % divisor === 0) && (operand2 % divisor === 0)) {
      return divisor;
    }
    return iter(divisor - 1);
  };

  return iter(Math.min(operand1, operand2));
};

const greeting = 'Find the greatest common divisor of given numbers.\n';

const getQuestion = () => {
  const number1 = random(1, 100);
  const number2 = random(1, 500);
  return `${number1} ${number2}`;
};

const getAnswer = (question) => `${countGreatestCommonFactor(...question.split(' '))}`;

export default () => startGame(greeting, getQuestion, getAnswer);
