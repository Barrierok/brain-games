import makeGame from '..';
import random from '../utils';

const operators = '+-*';

const calculateExpression = (operand1, operation, operand2) => {
  switch (operation) {
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
  const operation = operators[random(0, operators.length)];

  const result = {
    question: `${operand1} ${operation} ${operand2}`,
    correctAnswer: `${calculateExpression(operand1, operation, operand2)}`,
  };
  return result;
};

export default () => makeGame(gameDescription, getData);
