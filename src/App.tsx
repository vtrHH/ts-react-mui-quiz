import React, { useState } from 'react';
import { getQuizQuestions } from './API';

//Components
import QuestionField from './components/QuestionField';

// Interfaces & Types
import { IQuestions } from './types';

// MUI & Styling
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mainContainer: {
    margin: '4rem auto',
    textAlign: 'center'
  },
  gameContainer: {
    margin: '1.5rem auto',
    padding: '2em',
    width: '50%',
    border: '2px solid #c62828',
    borderRadius: '20px'
  },
  startContainer: {
    marginTop: '3rem'
  },
  button: {
    marginTop: '2rem'
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [started, setStarted] = useState(false);

  const startGame = async () => {
    const newQuestions = await getQuizQuestions();
    setQuestions(newQuestions);
    setStarted(true);
  };

  const nextQuestion = () => {
    console.log('Button next question clicked');
  };

  return (
    <div className="App">
      <div className={classes.mainContainer}>
        <Typography variant="h4" color="error">
          Verena's Open Trivia Quiz
        </Typography>
        {started ? (
          <>
            <Typography variant="h6" sx={{ mt: '2rem' }}>
              Your Score:
            </Typography>
            <div className={classes.gameContainer}>
              <QuestionField questions={questions} />
              <Button
                onClick={nextQuestion}
                variant="contained"
                color="error"
                sx={{ mt: '2rem' }}
              >
                Next Question
              </Button>
            </div>
          </>
        ) : (
          <div className={classes.startContainer}>
            <Typography variant="h5">Welcome :)</Typography>
            <br />
            <Typography variant="h6">
              Blick the button below to get started
            </Typography>
            <Button
              onClick={startGame}
              variant="contained"
              color="error"
              sx={{ mt: '2rem' }}
            >
              Start
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
