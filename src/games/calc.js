import startGame from '..';
import random from '../utils';

const operators = '+-*';

const getOperation = (operation) => operators[operation];

const countAnswer = (operand1, operation, operand2) => {
  const [a, b] = [operand1, operand2];
  switch (operation) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    default:
      return null;
  }
};

const greeting = 'What is the result of the expression?';

const getAnswer = (...expression) => `${countAnswer(...expression)}`;

const getData = () => {
  const numberOfOperations = operators.length;
  const operand1 = random(0, 100);
  const operand2 = random(0, 100);
  const operation = random(0, numberOfOperations);

  const result = {
    question: `${operand1} ${getOperation(operation)} ${operand2}`,
    correctAnswer: getAnswer(operand1, operation, operand2),
  };
  return result;
};

export default () => startGame(greeting, getData);
