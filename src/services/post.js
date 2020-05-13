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

export const GET_POST = gql`
  query getPost($postId: String!) {
    getPost(postId: $postId) {
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
        id
        text
        user {
          id
          name
          picture
        }
        dateCreated
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: String!) {
    deletePost(input: { postId: $postId })
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($text: String!, $postId: String!) {
    updatePost(input: { text: $text, postId: $postId }) {
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

export const CREATE_COMMENT = gql`
  mutation createComment($text: String!, $postId: String!) {
    createComment(input: { text: $text, postId: $postId }) {
      id
      text
      user {
        id
        name
        picture
      }
      dateCreated
    }
  }
`;

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
