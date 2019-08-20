import random from '../lib';

const getParity = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const greeting = 'Answer "yes" if number even otherwise answer "no".\n';

export const getAnswer = (question) => getParity(+question);

export const getQuestion = () => {
  const number = random(1, 100);
  const question = `${number}`;
  return question;
};
