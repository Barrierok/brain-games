import { question as ask } from 'readline-sync';
import * as calc from './games/calc';
import * as even from './games/even';

export default (game = null) => {
  if (!game) {
    console.log('Welcome, enter the name of the game in your console');
    return;
  }
  const variation = { calc, even };

  console.log(`Welcome to the Brain Games!\n${variation[game].greeting}`);

  const userName = ask('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const expectedCorrect = 3;

  const iter = (correctAnswers) => {
    if (correctAnswers === expectedCorrect) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = variation[game].getQuestion();
    console.log(`Question: ${question}`);

    const answer = ask('Your answer: ');
    const correctAnswer = variation[game].getAnswer(question);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    iter(correctAnswers + 1);
  };

  iter(0);
};
