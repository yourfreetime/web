import React from 'react';

import { Card, styled } from '@material-ui/core';

export const StyledCard = styled(Card)({
  borderRadius: 1
});

const CardComponent = props => <StyledCard {...props} />;

export default CardComponent;
