import { makeStyles, styled } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

/**
 * Experiment example with styled-jss
 */
export const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.background,
  },
  rootImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  card: {
    padding: 20,
    width: 340,
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  blockedButton: {
    flex: 1,
  },
  title: {
    margin: 0,
    marginBottom: 25,
    fontWeight: 'bold',
    lineHeight: 1,
    color: theme.palette.primary.grey,
  },
  img: { width: 75, height: 'auto', textAlign: 'center' },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
