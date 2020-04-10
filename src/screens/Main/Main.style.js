import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.background,
    minHeight: '100%'
  },
  appBar: {
    backgroundColor: 'white',
    color: 'black',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    alignItems: 'center'
  },
  navBar: {
    width: '100%',
    maxWidth: 800,
    padding: 0
  },
  logo: { height: 50, marginTop: -10 },
  userImage: { width: 50, height: 50, borderRadius: '100%' }
}));
