import startGame from '..';
import random from '../utils';

const generateProgression = (num, step) => {
  const progressionLength = 10;
  const iter = (progression, counter) => {
    if (counter > progressionLength) {
      return progression;
    }
    const newMemberProgression = num + (counter - 1) * step;
    return iter([...progression, newMemberProgression], counter + 1);
  };

  return iter([], 1);
};

const countStep = (progression) => {
  const iter = (progr) => {
    const [a, b, ...rest] = progr;
    if (a !== '..' && b !== '..') {
      return b - a;
    }
    return iter(rest);
  };

  return iter(progression);
};

const countElement = (progression) => {
  const indexElem = progression.indexOf('..');
  const step = countStep(progression);
  if (indexElem === 0) {
    return progression[1] - step;
  }
  return progression[0] + indexElem * step;
};

const greeting = 'What number is missing in the progression?\n';

const getAnswer = (progression) => `${countElement(progression)}`;

const getData = () => {
  const num = random(-30, 70);
  const step = random(-10, 60);
  const index = random(0, 10);
  const progression = generateProgression(num, step);
  progression[index] = '..';

  const result = {
    question: progression.join(' '),
    correctAnswer: getAnswer(progression),
  };
  return result;
};

export default () => startGame(greeting, getData);
