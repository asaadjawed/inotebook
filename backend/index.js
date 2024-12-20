const connectToMongo = require('./db');
const express = require('express');

// Connect to MongoDB
connectToMongo();


// Set up Express app
const app = express()
const port = 3000

app.use(express.json())


//Available Routes:
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})