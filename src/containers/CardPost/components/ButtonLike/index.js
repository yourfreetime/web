import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import ButtonFooter from '../ButtonFooter';

import { likePost, unlikePost } from 'services/post';

const ButtonLikeComponent = ({ currentUser, post, countLikes }) => {
  let like;
  if (post.likes) {
    like = post.likes.find(
      item => currentUser && item.user.id === currentUser.id
    );
  }

  return (
    <ButtonFooter
      onClick={() => {
        if (like) {
          unlikePost(post.id, like);
        } else {
          likePost(post.id, {
            user: firebase
              .firestore()
              .collection('user')
              .doc(currentUser.id)
          });
        }
      }}
      active={!!like}
      icon="enhance"
    >
      ({countLikes}) Realçar
    </ButtonFooter>
  );
};

ButtonLikeComponent.propTypes = {
  currentUser: PropTypes.object,
  post: PropTypes.object,
  countLikes: PropTypes.number
};

export default ButtonLikeComponent;
