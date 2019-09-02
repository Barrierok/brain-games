import makeGame from '..';
import random from '../utils';

const progressionLength = 10;

const generateProgression = (init, step, length) => {
  const iter = (progression, counter) => {
    if (counter > length) {
      return progression;
    }
    const newMember = init + (counter - 1) * step;
    return iter([...progression, newMember], counter + 1);
  };

  return iter([], 1);
};

const gameDescription = 'What number is missing in the progression?';

const getData = () => {
  const init = random(-30, 70);
  const step = random(-10, 60);
  const progression = generateProgression(init, step, progressionLength);
  const hiddenElementIndex = random(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElementIndex];

  progression[hiddenElementIndex] = '..';

  const roundData = {
    question: progression.join(' '),
    correctAnswer: correctAnswer.toString(),
  };
  return roundData;
};

export default () => makeGame(gameDescription, getData);
