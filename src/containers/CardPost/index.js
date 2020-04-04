import React from 'react';
import { Card, Divider } from '@material-ui/core';

import { useStyles } from './CardPost.style';

import ButtonFooter from './components/ButtonFooter';

const CardPostContainer = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.title}>
        <img
          alt="Usuário"
          className={classes.image}
          src="https://www.driver-project.eu/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
        />
        <div className={classes.titleName}>
          <h2 className={classes.userName}>Henrique Costa</h2>
          <h4 className={classes.date}>01/04/2020 - 08:00</h4>
        </div>
      </div>
      <Divider className={classes.divider} />
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source
      <Divider className={classes.divider} />
      <div className={classes.title}>
        <ButtonFooter icon="enhance">Realçar</ButtonFooter>
        <ButtonFooter icon="reply">Responder</ButtonFooter>
      </div>
    </Card>
  );
};

export default CardPostContainer;
