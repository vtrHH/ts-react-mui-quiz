import React, { useState } from 'react';
import { getQuizQuestions } from './API';

// MUI
import { Typography, Button } from '@mui/material';

//Components
import QuestionField from './components/QuestionField';

// Interfaces & Types
import { IQuestions } from './types';

const App: React.FC = () => {
  const [questions, setQuestions] = useState<IQuestions[]>([]);

  const startGame = async () => {
    const newQuestions = await getQuizQuestions();
    setQuestions(newQuestions);
  };

  const nextQuestion = () => {
    console.log('Button next question clicked');
  };

  return (
    <div className="App">
      <Typography variant="h4">Verena's Open Trivia Quiz</Typography>
      <Typography variant="body2">Your Score:</Typography>
      <Button onClick={startGame}>Start</Button>
      <QuestionField questions={questions} />
      <Button onClick={nextQuestion}>Next Question</Button>
    </div>
  );
};

export default App;
