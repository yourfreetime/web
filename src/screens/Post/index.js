import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Root from 'components/Root';
import Loader from 'components/Loader';
import CardPost from 'containers/CardPost';
import CardComment from './components/CardComment';

import { GET_POST } from 'services/post';

const PostScreen = ({ match }) => {
  const { loading, data } = useQuery(GET_POST, {
    variables: { postId: match.params.id }
  });

  if (loading) {
    return <Loader />;
  }

  const post = data.getPost;

  return (
    <Root>
      <CardPost post={post} />
      {post.comments && (
        <>
          <h5>Comentários: </h5>
          {post.comments.map(item => (
            <CardComment
              key={item.text + item.date + item.author}
              comment={item}
            />
          ))}
        </>
      )}
    </Root>
  );
};

export default PostScreen;
