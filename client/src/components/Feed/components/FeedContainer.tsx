import React from 'react'
import Container from '@material-ui/core/Container';
import { FeedList } from './FeedList';

import { useFeed } from '../hooks/useFeed';

export const FeedContainer = () => {
  const { feedList } = useFeed()
  return (
    <Container>
      <FeedList content={feedList} />
    </Container>
  )
}
