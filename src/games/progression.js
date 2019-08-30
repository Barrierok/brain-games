import makeGame from '..';
import { random, toString } from '../utils';

const progressionLength = 10;

const generateProgression = (init, step, expectedProgressionLength) => {
  const iter = (progression, counter) => {
    if (counter > expectedProgressionLength) {
      return progression;
    }
    const newMemberProgression = init + (counter - 1) * step;
    return iter([...progression, newMemberProgression], counter + 1);
  };

  return iter([], 1);
};

const gameDescription = 'What number is missing in the progression?';

const getData = () => {
  const init = random(-30, 70);
  const step = random(-10, 60);
  const progression = generateProgression(init, step, progressionLength);
  const hiddenElementIndex = random(0, progressionLength - 1);
  progression[hiddenElementIndex] = '..';

  const roundData = {
    question: progression.join(' '),
    correctAnswer: toString(init + step * hiddenElementIndex),
  };
  return roundData;
};

export default () => makeGame(gameDescription, getData);
