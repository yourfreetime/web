import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

import { useStyles } from './Loader.style';
import { colors } from 'core/constants';

const LoaderComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} aria-busy="true" role="alert">
      <SyncLoader size={30} color={colors.dark} />
    </div>
  );
};

export default LoaderComponent;
