import React from 'react';

// Types & Interfaces
import { IQuestions } from '../types';

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
  questions: IQuestions[];
}

const QuestionField: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const questions = props.questions;
  console.log(props);
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h6">Question Title</Typography>
      <br />
      <Button variant="outlined" color="error" sx={{ mt: '1rem' }}>
        Answer 1
      </Button>
      <Button variant="outlined" color="error" sx={{ mt: '1rem' }}>
        Answer 2
      </Button>
      <Button variant="outlined" color="error" sx={{ mt: '1rem' }}>
        Answer 3
      </Button>
      <Button variant="outlined" color="error" sx={{ mt: '1rem' }}>
        Answer 4
      </Button>
    </div>
  );
};

export default QuestionField;
