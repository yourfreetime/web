import React, { useState, useEffect } from 'react';

import Root from 'components/Root';
import CardPost from 'containers/CardPost';
import CardComment from './components/CardComment';

import { getPost } from 'services/post';

const PostScreen = ({ match, currentUser }) => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState('true');

  useEffect(() => {
    const unsubscribe = getPost(match.params.id, post => {
      setPost(post);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [match]);

  if (loading) {
    return 'Carregando...';
  }

  return (
    <Root>
      <CardPost post={post} currentUser={currentUser} />
      <h5>Comentários: </h5>
      {post.comments.map(item => (
        <CardComment key={item.text + item.date + item.author} comment={item} />
      ))}
    </Root>
  );
};

export default PostScreen;
