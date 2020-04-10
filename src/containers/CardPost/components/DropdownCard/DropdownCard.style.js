import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  button: {
    position: 'absolute',
    top: 0,
    right: 10,
    transform: 'rotate(270deg)',
    '&:hover': { background: 'transparent' }
  }
});
