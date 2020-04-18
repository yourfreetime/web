import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import moment from 'moment';

import { useStyles } from './CardPost.style';

import Card from 'components/Card';
import ButtonFooter from './components/ButtonFooter';
import ButtonLike from './components/ButtonLike';
import FormComment from './components/FormComment';
import DropdownCard from './components/DropdownCard';
import EditPost from './components/EditPost';

import { IMAGE_DEFAULT } from 'core/constants';

const CardPostContainer = ({ post, currentUser }) => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const [author, setAuthor] = useState({
    name: '',
    picture: IMAGE_DEFAULT
  });
  const [showComment, setShowComment] = useState(false);

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
          <Link to={`/user/${author.id}`} style={{ textDecoration: 'none' }}>
            <h2 className={classes.userName}>{author.name}</h2>
          </Link>
          <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
            <h4 className={classes.date}>
              {post.date
                ? moment(post.date.toDate()).format('DD/MM/YYYY - hh:mm')
                : ''}
            </h4>
          </Link>
        </div>
      </div>
      <Divider className={classes.divider} />
      {editing ? (
        <EditPost post={post} onClose={() => setEditing(false)} />
      ) : (
        post.text
      )}
      <Divider className={classes.divider} />
      <div className={classes.title}>
        <ButtonLike
          post={post}
          currentUser={currentUser}
          countLikes={countLikes}
        />
        <ButtonFooter onClick={() => setShowComment(!showComment)} icon="reply">
          ({countComments}) Responder
        </ButtonFooter>
      </div>
      <FormComment
        postId={post.id}
        show={showComment}
        currentUser={currentUser}
      />
      <DropdownCard
        post={post}
        currentUser={currentUser}
        onEdit={() => setEditing(true)}
      />
    </Card>
  );
};

CardPostContainer.propTypes = {
  post: PropTypes.object
};

export default CardPostContainer;
