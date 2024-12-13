const connectToMongo = require('./db');
const express = require('express');

// Connect to MongoDB
connectToMongo();

// Set up Express app
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My First Backend server setup!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})