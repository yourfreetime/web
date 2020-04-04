import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: { padding: 16, marginBottom: 16 },
  title: { display: 'flex' },
  titleName: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 16,
    justifyContent: 'center'
  },
  image: { width: 80, height: 80, borderRadius: '100%' },
  userName: { marginTop: 0, marginBottom: 10 },
  date: { margin: 0 },
  divider: { margin: '16px 0px' }
});
