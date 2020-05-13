import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';

import ButtonFooter from '../ButtonFooter';

import { LIKE_POST, UNLIKE_POST, LIST_POSTS_FEED } from 'services/post';
import { readCurrentUser } from 'core/constants';

const ButtonLikeComponent = ({ post, countLikes }) => {
  const update = (cache, { data }) => {
    const { listPostsFeed } = cache.readQuery({ query: LIST_POSTS_FEED });
    const likes = data.createLike || data.deleteLike;

    const posts = listPostsFeed.map(item =>
      item.id === post.id ? { ...item, likes } : item
    );
    cache.writeQuery({
      query: LIST_POSTS_FEED,
      data: { listPostsFeed: posts }
    });
  };
  const [likePost] = useMutation(LIKE_POST, { update });
  const [unlikePost] = useMutation(UNLIKE_POST, { update });

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
