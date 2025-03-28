import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 10,
    padding: '10px',
  },
  media: {
    height: 200,
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'white',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;

