const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/subscription', require('./routes/subscription'));
app.use('/contract', require('./routes/contract'));

// MongoDB Connection
const url = `${process.env.MONGODB_URI}`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log('Connected to database ');
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

// Start server
app.listen(5000);
