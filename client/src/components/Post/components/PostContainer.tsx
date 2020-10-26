import React, { useState } from "react";
import axios from 'axios';
import {
  Button,
  TextField,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import "../../../App.css";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    fontSize: 20,
    width: 500,
    color: "#fff",
  },
  input: {
    marginBottom: 40,
    display: "block",
  },
  paper: {
    margin: "auto",
    width: "60%",
    textAlign: "center",
    height: 300,
    background: "#232323",
    color: "#fff",
  },
  submit: {
    background: "#2e86de",
    color: "#fff",
    width: 140,
  },
}));

export const PostContainer = () => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [message, setMesssage] = useState("");

  const data = {
    title: title,
    message: message
  }
  // function for sending values to backend
  const handleSubmit = () => {
    axios.post('http://localhost:5000/posts', data)
      .then(response => console.log(response))
  };

  return (
    <div id="post-container" style={{ marginTop: 50 }}>
      <Paper className={classes.paper}>
        <Typography variant="h2">Make your post</Typography>

        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginTop: 10 }}
          className={classes.input}
          placeholder="Title"
          inputProps={{ className: classes.inputStyle }}
        />
        <TextField
        value={message}
        onChange={(e) => setMesssage(e.target.value)}
          className={classes.input}
          placeholder="Message"
          multiline
          inputProps={{ className: classes.inputStyle }}
        />

        <Button onClick={handleSubmit} className={classes.submit}>
          Post
        </Button>
      </Paper>
    </div>
  );
};
