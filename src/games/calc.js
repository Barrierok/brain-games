
import random from '../lib';

const getOperation = (operation) => {
  switch (operation) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return 'Unknow operation';
  }
};

const countAnswer = (operand1, operation, operand2) => {
  const a = +operand1;
  const b = +operand2;
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

export const greeting = 'What is the result of the expression?\n';

export const getAnswer = (question) => `${countAnswer(...question.split(' '))}`;

export const getQuestion = () => {
  const operand1 = random(0, 100);
  const operand2 = random(0, 100);
  const operation = random(0, 3);
  const question = `${operand1} ${getOperation(operation)} ${operand2}`;
  return question;
};
