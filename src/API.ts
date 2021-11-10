import { fisherYatesShuffle } from './utils';
import { shuffleArray } from './utils';
import { IQuestion } from './types';

export const getQuizQuestions = async () => {
  const response = await fetch(
    'https://opentdb.com/api.php?amount=10&type=multiple'
  );
  const data = await response.json();
  const shuffledArray = data.results.map((question: IQuestion) => ({
    ...question,
    answers: fisherYatesShuffle([
      ...question.incorrect_answers,
      question.correct_answer
    ])
  }));
  return shuffledArray;
};
