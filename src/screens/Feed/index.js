import React, { useEffect, useState } from 'react';

import Root from 'components/Root';
import CardPost from 'containers/CardPost';
import CreatePost from './components/CreatePost';

import { getPost } from 'services/post';

const FeedScreen = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPost(posts => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  return (
    <Root>
      <CreatePost currentUser={currentUser} />
      {posts.map(item => (
        <CardPost key={item.id} post={item} />
      ))}
    </Root>
  );
};

export default FeedScreen;
