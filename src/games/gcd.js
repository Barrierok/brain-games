import makeGame from '..';
import random from '../utils';

const calculateGreatestCommonDivisor = (operand1, operand2) => {
  const iter = (divisor) => {
    if ((operand1 % divisor === 0) && (operand2 % divisor === 0)) {
      return divisor;
    }
    return iter(divisor - 1);
  };

  return iter(Math.min(operand1, operand2));
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getData = () => {
  const operand1 = random(1, 100);
  const operand2 = random(1, 500);

  const roundData = {
    question: `${operand1} ${operand2}`,
    correctAnswer: calculateGreatestCommonDivisor(operand1, operand2).toString(),
  };
  return roundData;
};

export default () => makeGame(gameDescription, getData);
