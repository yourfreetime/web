import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Divider } from '@material-ui/core';
import moment from 'moment';

import { useStyles } from './CardPost.style';

import ButtonFooter from './components/ButtonFooter';
import ButtonLike from './components/ButtonLike';
import { IMAGE_DEFAULT } from 'core/constants';

const CardPostContainer = ({ post, currentUser }) => {
  const classes = useStyles();
  const [author, setAuthor] = useState({
    name: '',
    picture: IMAGE_DEFAULT
  });

  useEffect(() => {
    post.author.get().then(snap => setAuthor({ ...snap.data(), id: snap.id }));
  }, [post]);

  const countComments = post.comments ? post.comments.length : 0;
  const countLikes = post.likes ? post.likes.length : 0;

  return (
    <Card className={classes.root}>
      <div className={classes.title}>
        <img alt="Usuário" className={classes.image} src={author.picture} />
        <div className={classes.titleName}>
          <h2 className={classes.userName}>{author.name}</h2>
          <h4 className={classes.date}>
            {post.date
              ? moment(post.date.toDate()).format('DD/MM/YYYY - hh:mm')
              : ''}
          </h4>
        </div>
      </div>
      <Divider className={classes.divider} />
      {post.text}
      <Divider className={classes.divider} />
      <div className={classes.title}>
        <ButtonLike
          post={post}
          currentUser={currentUser}
          countLikes={countLikes}
        />
        <ButtonFooter icon="reply">({countComments}) Responder</ButtonFooter>
      </div>
    </Card>
  );
};

CardPostContainer.propTypes = {
  post: PropTypes.object
};

export default CardPostContainer;
