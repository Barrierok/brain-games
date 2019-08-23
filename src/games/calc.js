import startGame from '..';
import random from '../lib';

const getOperation = (operation) => '+-*'[operation];

const countAnswer = (operand1, operation, operand2) => {
  const [a, b] = [+operand1, +operand2];
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'Unknow operation';
  }
};

const greeting = 'What is the result of the expression?\n';

const getAnswer = (question) => `${countAnswer(...question.split(' '))}`;

const getQuestion = () => {
  const numberOfOperations = 3;
  const operand1 = random(0, 100);
  const operand2 = random(0, 100);
  const operation = random(0, numberOfOperations);
  return `${operand1} ${getOperation(operation)} ${operand2}`;
};

export default () => startGame(greeting, getQuestion, getAnswer);
