import firebase from 'firebase';
import gql from 'graphql-tag';

export const LIST_POSTS_FEED = gql`
  query listPostsFeed {
    listPostsFeed {
      id
      text
      dateCreated
      author {
        id
        name
        picture
      }
      likes {
        date
      }
      comments {
        dateCreated
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($text: String!) {
    createPost(input: { text: $text }) {
      id
      text
      dateCreated
      author {
        id
        name
        picture
      }
      likes {
        date
      }
      comments {
        dateCreated
      }
    }
  }
`;

export const getPost = (postId, callback) => {
  const unsubscribe = firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .onSnapshot(docSnapshot => {
      callback({
        ...docSnapshot.data(),
        id: docSnapshot.id
      });
    });

  return unsubscribe;
};

export const updatePost = async (postId, text) => {
  return await firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({ text });
};

export const deletePost = async postId => {
  return await firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .delete();
};

export const likePost = async (postId, likeObject) => {
  likeObject = {
    ...likeObject,
    date: firebase.firestore.Timestamp.fromDate(new Date())
  };

  return await firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({
      likes: firebase.firestore.FieldValue.arrayUnion(likeObject)
    });
};

export const unlikePost = async (postId, likeObject) => {
  return await firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({
      likes: firebase.firestore.FieldValue.arrayRemove(likeObject)
    });
};

export const commentPost = async (postId, commentObject) => {
  commentObject = {
    ...commentObject,
    date: firebase.firestore.Timestamp.fromDate(new Date())
  };

  return await firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .update({
      comments: firebase.firestore.FieldValue.arrayUnion(commentObject)
    });
};
