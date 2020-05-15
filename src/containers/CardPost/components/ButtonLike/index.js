import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { uCreateLike, uDeleteLike } from 'yourfreetime/cache';
import { CREATE_LIKE, DELETE_LIKE } from 'yourfreetime/mutations';

import ButtonFooter from '../ButtonFooter';

import { readCurrentUser } from 'core/constants';

const ButtonLikeComponent = ({ post, countLikes }) => {
  const [likePost] = useMutation(CREATE_LIKE, {
    update: uCreateLike.bind(this, { postId: post.id })
  });
  const [unlikePost] = useMutation(DELETE_LIKE, {
    update: uDeleteLike.bind(this, { postId: post.id })
  });

  const currentUser = readCurrentUser();
  const isLiked = post.likes.some(
    item => currentUser && item.user.id === currentUser.id
  );

  return (
    <ButtonFooter
      onClick={() => {
        if (isLiked) {
          unlikePost({ variables: { postId: post.id } });
        } else {
          likePost({ variables: { postId: post.id } });
        }
      }}
      active={!!isLiked}
      icon="enhance"
    >
      ({countLikes}) Realçar
    </ButtonFooter>
  );
};

ButtonLikeComponent.propTypes = {
  post: PropTypes.object,
  countLikes: PropTypes.number
};

export default ButtonLikeComponent;
