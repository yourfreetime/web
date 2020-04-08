import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: { marginTop: 16 },
  input: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: { marginTop: 16, textAlign: 'right' },
  image: { width: 35, height: 35, borderRadius: '100%', marginRight: 16 }
});
