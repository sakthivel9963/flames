import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    margin: '10px 0',
  },
  continer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: '10px 0',
  },
}));

export default useStyles;
