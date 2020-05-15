import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LIST_POSTS_FEED } from 'yourfreetime/queries';

import Root from 'components/Root';
import Loader from 'components/Loader';
import CardPost from 'containers/CardPost';
import CreatePost from './components/CreatePost';

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
