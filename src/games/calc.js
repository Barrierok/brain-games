import makeGame from '..';
import random from '../utils';

const operators = '+-*';

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

const gameDescription = 'What is the result of the expression?';

const getData = () => {
  const operand1 = random(0, 100);
  const operand2 = random(0, 100);
  const operator = operators[random(0, operators.length - 1)];

  const roundData = {
    question: `${operand1} ${operator} ${operand2}`,
    correctAnswer: calculate(operand1, operand2, operator).toString(),
  };
  return roundData;
};

export default () => makeGame(gameDescription, getData);
