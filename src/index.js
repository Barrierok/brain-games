import { question } from 'readline-sync';

export const greeting = (variation = 'default') => {
  const variationGame = {
    brainEven: 'Answer "yes" if number even otherwise answer "no".\n',
    default: '',
  };
  console.log(`Welcome to the Brain Games!\n${variationGame[variation]}`);
};

export const getUserName = () => {
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const brainEven = (userName) => {
  const getCorrectAnswer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const getRandom = () => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (min + max)) + min;
  };
  const expectedCorrect = 3;
  const iter = (correctAnswers) => {
    if (correctAnswers === expectedCorrect) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const num = getRandom();
    const correctAnswer = getCorrectAnswer(num);

    console.log(`Question: ${num}`);
    const answer = question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    iter(correctAnswers + 1);
  };

  iter(0);
};
