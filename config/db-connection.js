require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

// Connection Event Listeners
mongoose.connection
  // Console message displaying successful connection
  .on('open', () => console.log('Connected to Mongoose'))
  // Console message displaying successful disconnection
  .on('close', () => console.log('Disconnected from Mongoose'))
  //  Displays error
  .on('error', (error) => console.log(error));

module.exports = mongoose;
