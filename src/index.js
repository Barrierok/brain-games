import { question as ask } from 'readline-sync';

const expectedCorrectAnswersCounter = 3;

export default (greeting, getQuestion, getAnswer) => {
  console.log(`Welcome to the Brain Games!\n${greeting}`);

  const userName = ask('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (correctAnswersCounter) => {
    if (correctAnswersCounter === expectedCorrectAnswersCounter) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = getQuestion();
    console.log(`Question: ${question}`);

    const answer = ask('Your answer: ');
    const correctAnswer = getAnswer(question);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    iter(correctAnswersCounter + 1);
  };

  iter(0);
};
