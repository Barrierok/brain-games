import { question } from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getRandom = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (min + max)) + min;
};

export default () => {
  const userName = getUserName();
  const expectedCorrect = 3;

  const getCorrectAnswer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

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
