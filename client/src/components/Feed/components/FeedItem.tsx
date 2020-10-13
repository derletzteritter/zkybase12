import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    paper: {
      marginTop: 30,
      background: '#232323',
      color: '#fff' 
    },
    header: { 
      color: '#fff'
    },
    content: {
      marginLeft: 30
    }
  }),
);

export const FeedItem = (feed) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper} variant="outlined">
        <div className={classes.content}>
          <div className={classes.header}>
          <h2>{feed.name}</h2>
          </div>
          <p>{feed.content}</p>
        </div>
      </Paper>
    </div>
  )
}
