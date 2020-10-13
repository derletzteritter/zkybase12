import React from 'react'
import { FeedItem } from './FeedItem'

export const FeedList = ({ content }) => {
  return (
    <div>
      {content.map((con) => (
        <FeedItem key={con.id} {...con}/>
      ))}
    </div>
  )
}
