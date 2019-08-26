import startGame from '..';
import random from '../utils';

const countGreatestCommonFactor = (operand1, operand2) => {
  const iter = (divisor) => {
    if ((operand1 % divisor === 0) && (operand2 % divisor === 0)) {
      return divisor;
    }
    return iter(divisor - 1);
  };

  return iter(Math.min(operand1, operand2));
};

const greeting = 'Find the greatest common divisor of given numbers.';

const getAnswer = (...numbers) => `${countGreatestCommonFactor(...numbers)}`;

const getData = () => {
  const number1 = random(1, 100);
  const number2 = random(1, 500);
  const result = {
    question: `${number1} ${number2}`,
    correctAnswer: getAnswer(number1, number2),
  };
  return result;
};

export default () => startGame(greeting, getData);
