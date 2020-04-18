import { List, Popover } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  button: {
    position: 'absolute',
    top: 0,
    right: 10,
    transform: 'rotate(270deg)',
    '&:hover': { background: 'transparent' }
  },
  item: { padding: '4px 8px' },
  itemText: { fontSize: 14 }
});

export const StyledList = styled(List)({
  margin: 0
});

export const StyledPopover = styled(Popover)({
  borderRadius: 1
});
