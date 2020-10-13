import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    paper: {
      margin: 10,
      background: '#232323',
      color: '#fff'
    },
    header: { 
      color: '#fff'
    },
    replies: {
      marginLeft: 30
    }
  }),
);

export const FeedItem = (feed) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} variant="outlined">
      <div className={classes.header}>
        <h2>{feed.name}</h2>
      </div>
      <p>{feed.content}</p>
      <div className={classes.replies}>
        <h2>{feed.reply.name}</h2>
        <p>{feed.reply.content}</p>
      </div>
    </Paper>
  )
}
