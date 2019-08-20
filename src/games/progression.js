import random from '../lib';

const generateProgression = (num, step) => {
  const iter = (progression, length) => {
    if (length > 10) {
      return progression;
    }
    const nextNum = num + (length - 1) * step;
    return iter([...progression, nextNum], length + 1);
  };
  return iter([], 1);
};

const countStep = (progression) => {
  const iter = (progr) => {
    const [a, b, ...rest] = progr;
    if (a !== '..' && b !== '..') {
      return +b - +a;
    }
    return iter(rest);
  };

  return iter(progression);
};

const countElement = (progression) => {
  const indexElem = progression.indexOf('..');
  const step = countStep(progression);
  if (indexElem === 0) {
    return +progression[1] - step;
  }
  return +progression[0] + indexElem * step;
};

export const greeting = 'What number is missing in the progression?\n';

export const getQuestion = () => {
  const num = random(-30, 70);
  const step = random(-10, 60);
  const index = random(0, 10);
  const progression = generateProgression(num, step);
  return progression.map((item, i) => ((i === index) ? '..' : item)).join(' ');
};

export const getAnswer = (question) => `${countElement(question.split(' '))}`;
