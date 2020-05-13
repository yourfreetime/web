import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    border: 'none',
    marginRight: 32,
    fontSize: 16,
    textDecoration: 'none',
    color: ({ active }) =>
      active ? theme.palette.primary.dark : theme.palette.primary.greyDarken3,
    fontWeight: 600,
    backgroundColor: 'transparent',
    '&:last-child': { marginRight: 0 },
    '&:hover': { cursor: 'pointer' },
    '&:focus': { outline: 'none' }
  },
  image: { marginRight: 8 }
}));
