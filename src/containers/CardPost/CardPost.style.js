import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: 16,
    marginBottom: 16,
    position: 'relative',
    '&:last-child': { marginBottom: 0 }
  },
  title: { display: 'flex' },
  titleName: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 16,
    justifyContent: 'center'
  },
  image: { width: 40, height: 40, borderRadius: '100%' },
  userName: {
    marginTop: 0,
    marginBottom: 5,
    fontSize: 18,
    color: theme.palette.primary.greyDarken3
  },
  date: { margin: 0, fontSize: 13, color: theme.palette.primary.grey },
  divider: { margin: '16px 0px' }
}));
