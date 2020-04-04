import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  rootUser: {
    display: 'flex',
    padding: 16,
    marginBottom: 66,
    justifyContent: 'center',
    height: 100,
    position: 'relative',
    overflow: 'inherit',
    backgroundColor: theme.palette.primary.main
  },
  image: {
    position: 'absolute',
    bottom: -50,
    border: '10px solid white',
    width: 100,
    height: 100,
    borderRadius: '100%',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
  },
  username: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bolder'
  },
  counts: { display: 'flex', alignItems: 'center' },
  description: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
