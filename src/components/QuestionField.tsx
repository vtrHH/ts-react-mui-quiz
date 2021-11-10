import React from 'react';

// Types & Interfaces
import { IQuestion } from '../types';

// MUI & Styling
import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mainContainer: {
    marginTop: '0.5rem',
    display: 'flex',
    flexDirection: 'column'
  }
});

interface IProps {
  question: IQuestion;
}

const QuestionField: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const question = props.question;
  console.log(question);
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h6">{question.question}</Typography>
      <br />
      {question.answers.map((answer) => (
        <Button
          variant="outlined"
          color="error"
          sx={{ mt: '1rem' }}
          key={answer}
        >
          {answer}
        </Button>
      ))}
    </div>
  );
};

export default QuestionField;
