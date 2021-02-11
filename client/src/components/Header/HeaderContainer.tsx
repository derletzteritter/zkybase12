import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    header: {
      background: '#232323'
    }
  }),
);

export const HeaderContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography style={{ fontWeight: 'bold' }} variant="h6" className={classes.title}>
            zkybase12 - COVID-19 Helper
          </Typography>
          <Button style={{ fontWeight: 'bold' }} color="inherit">Login</Button>
          <Button style={{ fontWeight: 'bold' }} color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
