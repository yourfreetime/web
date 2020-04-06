import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Divider } from '@material-ui/core';
import moment from 'moment';

import { useStyles } from './CardPost.style';

import ButtonFooter from './components/ButtonFooter';

const IMAGE_DEFAULT =
  'https://www.driver-project.eu/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';

const CardPostContainer = ({ post }) => {
  const classes = useStyles();
  const [author, setAuthor] = useState({
    name: '',
    picture: IMAGE_DEFAULT
  });

  useEffect(() => {
    post.author.get().then(snap => setAuthor({ ...snap.data(), id: snap.id }));
  }, [post]);

  return (
    <Card className={classes.root}>
      <div className={classes.title}>
        <img alt="Usuário" className={classes.image} src={author.picture} />
        <div className={classes.titleName}>
          <h2 className={classes.userName}>{author.name}</h2>
          <h4 className={classes.date}>
            {moment(post.date.toDate()).format('DD/MM/YYYY - hh:mm')}
          </h4>
        </div>
      </div>
      <Divider className={classes.divider} />
      {post.text}
      <Divider className={classes.divider} />
      <div className={classes.title}>
        <ButtonFooter icon="enhance">
          ({post.comments.length}) Realçar
        </ButtonFooter>
        <ButtonFooter icon="reply">
          ({post.likes.length}) Responder
        </ButtonFooter>
      </div>
    </Card>
  );
};

CardPostContainer.propTypes = {
  post: PropTypes.object
};

export default CardPostContainer;
