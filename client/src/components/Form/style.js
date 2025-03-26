import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fixes form width
    marginTop: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#1976d2',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
}));

