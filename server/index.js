const express = require('express');
const cors = require('cors');
var mysql = require('mysql');
const e = require('express');
var bodyParser = require('body-parser')

const app = express();

const PORT = 5000;

app.use(cors())
app.use(bodyParser.json())

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

// Check for connection
con.connect((err) => {
  if (err) throw err;
  console.log('Connected');
  app.get('/connection', (req, res) => {
    res.send('Connected to the database')
  })
})

async function getPost(callback) {
  con.query("SELECT * FROM posts ORDER BY id DESC", (err, result, fields) => {
    if (err) throw err;
    callback(result)
  })
}

function setPost(name, content) {
  // Sets the post to the database
  const query = "INSERT INTO posts (name, content) VALUES (?, ?) "
  const args = [name, content]
  con.query(query, args, (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  })
  getPost((result) => {
    app.get('/posts', (req, res) => {
      res.send(result);
    })
  })
}


getPost((result) => {
  app.get('/posts', (req, res) => {
    res.send(result);
  })
})

app.post('/posts', (req, res) => {
  res.send('Someone sent a response')
  setPost(req.body.title, req.body.message);
  getPost((result) => {
    app.get('/posts', (req, res) => {
      res.send(result);
    })
  })
})