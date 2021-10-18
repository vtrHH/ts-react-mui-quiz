import React from 'react';

// Components
import SingleQuestion from './SingleQuestion';

// Types & Interfaces
import { IQuestions } from '../types';

interface IProps {
  questions: IQuestions[];
}

const QuestionField: React.FC<IProps> = (props) => {
  const questions = props.questions;
  console.log(props);
  return (
    <div>
      <SingleQuestion />
    </div>
  );
};

export default QuestionField;
