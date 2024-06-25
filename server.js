// Requiring and configuring the .env file to access its variables
require('dotenv').config();
// Requiring express
const express = require('express');
// Creating the express server and storing inside the app variable
const app = express();

const cors = require('cors');
// Port in which the server will run on
const PORT = process.env.PORT || 8000;

// Requiring Routers //
// Character Router
const charRouter = require('./routes/chars.js');
// Enemy Router
const enemyRouter = require('./routes/enemy.js');
// Aeon Router
const aeonRouter = require('./routes/aeon.js');

// Configuring the server to accept and parse JSON data.
app.use(express.json());

app.use(cors());

//Custom Middlware
app.use((req, res, next) => {
  console.log(`A ${req.method} request was made to ${req.url}`);
  next();
});

// Connecting the router to the server
// Characters router @ /chars
app.use('/chars', charRouter);
// Enemies router @ /enemies
app.use('/enemies', enemyRouter);
// Aeons router @ /aeons
app.use('/aeons', aeonRouter);

// Base Route //
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Honkai Star Rail Wiki!"
  });
});

// Error Handling Middlware
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
