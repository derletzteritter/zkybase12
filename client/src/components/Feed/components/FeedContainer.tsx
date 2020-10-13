import React from 'react'
import Container from '@material-ui/core/Container';
import { FeedList } from './FeedList';

import { useFeed } from '../hooks/useFeed';

export const FeedContainer = () => {
  const { feedList, setFeedList } = useFeed()

  const getPostClient = () => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(response => console.log(response))
  }

  getPostClient() 

  return (
    <Container>
      <FeedList content={feedList} />
    </Container>
  )
}
