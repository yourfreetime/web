import React from 'react';

import { Button, styled } from '@material-ui/core';

export const StyledButton = styled(Button)({
  textTransform: 'initial',
  borderRadius: 1,
  boxShadow: 'none'
});

const ButtonComponent = props => <StyledButton {...props} />;

export default ButtonComponent;
