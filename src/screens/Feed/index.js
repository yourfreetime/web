import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Root from 'components/Root';
import Loader from 'components/Loader';
import CardPost from 'containers/CardPost';
import CreatePost from './components/CreatePost';

import { LIST_POSTS_FEED } from 'services/post';

const FeedScreen = () => {
  const { loading, data } = useQuery(LIST_POSTS_FEED);

  if (loading) {
    return <Loader />;
  }

  return (
    <Root>
      <CreatePost />
      {data.listPostsFeed.map(item => (
        <CardPost key={item.id} post={item} />
      ))}
    </Root>
  );
};

export default FeedScreen;
