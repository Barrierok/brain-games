import makeGame from '..';
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

const calculateStep = (progression) => {
  const iter = (sequence) => {
    const [a, b, ...rest] = sequence;
    if (a !== '..' && b !== '..') {
      return b - a;
    }
    return iter(rest);
  };

  return iter(progression);
};

const calculateHiddenElement = (progression) => {
  const indexHiddenElement = progression.indexOf('..');
  const step = calculateStep(progression);
  if (indexHiddenElement === 0) {
    return progression[1] - step;
  }
  return progression[0] + indexHiddenElement * step;
};

const gameDescription = 'What number is missing in the progression?';

const getData = () => {
  const num = random(-30, 70);
  const step = random(-10, 60);
  const progression = generateProgression(num, step);
  const indexHiddenElement = random(0, progression.length);
  progression[indexHiddenElement] = '..';

  const result = {
    question: progression.join(' '),
    correctAnswer: `${calculateHiddenElement(progression)}`,
  };
  return result;
};

export default () => makeGame(gameDescription, getData);
