const express = require('express');
const cors = require('cors');
var mysql = require('mysql');

const app = express();

const PORT = 5000;

app.use(cors())

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Server is running!')
})


// Database functions

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "covid"
})

// Check forc connection

con.connect((err) => {
  if (err) throw err;
  console.log('Connected');
  app.get('/connection', (req, res) => {
    res.send('Connected to the database')
  })
})

function getPost(callback) {
  con.query("SELECT * FROM posts", (err, result, fields) => {
    if (err) throw err;
    callback(result)
  })
}



function setPost(callback) {
  // Sets the post to the database
}


getPost((result) => {
  app.get('/posts', (req, res) => {
    res.send(result);
  })
})