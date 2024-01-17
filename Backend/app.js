const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // Import the connectDB function
const routes = require('./routes'); // Import the main routes file

const app = express();
const PORT = 4000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Use the main routes file
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
