import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Root from 'components/Root';
import Loader from 'components/Loader';
import CardPost from 'containers/CardPost';
import CreatePost from './components/CreatePost';

import { LIST_POSTS_FEED } from 'services/post';

const FeedScreen = ({ currentUser }) => {
  const { loading, error, data } = useQuery(LIST_POSTS_FEED);

  console.log(loading, data, error);

  if (loading) {
    return <Loader />;
  }

  return (
    <Root>
      <CreatePost currentUser={currentUser} />
      {data.listPostsFeed.map(item => (
        <CardPost key={item.id} post={item} currentUser={currentUser} />
      ))}
    </Root>
  );
};

export default FeedScreen;
