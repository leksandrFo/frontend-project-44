import { generateRandomNumber, isEven } from '../utils.js';
import start from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = String(generateRandomNumber(0, 100));
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, expectedAnswer: answer };
};

export default () => {
  start(description, generateRound);
};
