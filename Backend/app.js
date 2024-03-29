const express = require('express');
const cors = require('cors');
// const connectDB = require('./db'); // Import the connectDB function
const mongoose = require('mongoose')
const routes = require('./routes'); // Import the main routes file

const app = express();
const PORT = 4000;

// Connect to MongoDB
// connectDB();

// const mongo_uri = "mongodb://root:nilkant7259@mongo:27017/StockPulse";
mongoose.connect('mongodb://root:secret@mongo:27017/StockPulse?authSource=admin').then((data)=>{
  console.log(`MongoDB connected with server :${data.connection.host}`);
}).catch((error) => {
  console.error('MongoDB connection error:', error.message);
});

app.use(cors());
app.use(express.json());

// Use the main routes file
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
