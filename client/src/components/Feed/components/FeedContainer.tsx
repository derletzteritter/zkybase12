import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { FeedList } from './FeedList';

import { useFeed } from '../hooks/useFeed';

export const FeedContainer = () => {
  const { feedList, setFeedList } = useFeed();

  const getPostClient = () => {
    fetch('posts')
      .then(res => res.json())
      .then(response => {
        setFeedList(response)
      })
  }

  useEffect(() => {
    getPostClient()
  }, [feedList]);

  return (
    <Container>
      <FeedList content={feedList} />
    </Container>
  )
}