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
        user {
          id
        }
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
        user {
          id
        }
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
        user {
          id
        }
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
        user {
          id
        }
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

export const LIKE_POST = gql`
  mutation createLike($postId: String!) {
    createLike(input: { postId: $postId }) {
      date
      user {
        id
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation deleteLike($postId: String!) {
    deleteLike(input: { postId: $postId }) {
      date
      user {
        id
      }
    }
  }
`;
