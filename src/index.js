import { question as ask } from 'readline-sync';

const roundsCount = 3;

export default (greeting, getData) => {
  console.log(`Welcome to the Brain Games!\n${greeting}`);

  const userName = ask('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter === roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const { question, correctAnswer } = getData();

    console.log(`Question: ${question}`);

    const answer = ask('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    iter(counter + 1);
  };

  iter(0);
};
