import React, { useState } from 'react';
import { getQuizQuestions } from './API';

//Components
import QuestionField from './components/QuestionField';

// Interfaces & Types
import { IQuestion } from './types';

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

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const classes = useStyles();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);

  const startGame = async () => {
    const newQuestions = await getQuizQuestions();
    setQuestions(newQuestions);
    setStarted(true);
    setScore(0);
    setNumber(0);
    setGameOver(false);
  };

  const nextQuestion = () => {
    console.log('Button next question clicked');
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
    setNumber(nextQuestion);
  };

  return (
    <div className="App">
      <div className={classes.mainContainer}>
        <Typography variant="h4" color="error">
          Verena's Open Trivia Quiz
        </Typography>
        {started && !gameOver ? (
          <>
            <Typography variant="h6" sx={{ mt: '2rem' }}>
              Your Score: {score}
            </Typography>
            <div className={classes.gameContainer}>
              <QuestionField question={questions[number]} />
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
        ) : gameOver ? (
          <>
            <Typography variant="h5" sx={{ mt: '2rem' }}>
              All questions have been answered! Your final Score is:{' '}
            </Typography>
            <br />
            <Typography variant="h6">
              In for another round? Click the button below to get started again.
            </Typography>
            <Button
              onClick={startGame}
              variant="contained"
              color="error"
              sx={{ mt: '2rem' }}
            >
              Start again
            </Button>
          </>
        ) : (
          <div className={classes.startContainer}>
            <Typography variant="h5">Welcome :)</Typography>
            <br />
            <Typography variant="h6">
              Click the button below to get started
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
