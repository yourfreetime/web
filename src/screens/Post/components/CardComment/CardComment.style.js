import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: { marginBottom: 16, display: 'flex', position: 'relative' },
  card: { padding: 8, flex: 1 },
  image: { width: 40, height: 40, borderRadius: '100%', marginRight: 16 },
  userName: { margin: 0 },
  text: { fontSize: 18, margin: '5px 0' },
  arrow: {
    position: 'absolute',
    fill: 'white',
    left: 36,
    top: -8,
    width: 35,
    height: 53
  }
});
