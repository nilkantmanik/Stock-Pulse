const mongoose = require('mongoose')


const mongo_uri = "mongodb://root:nilkant7259@mongo:27017/StockPulse";

// mongodb://root:nilkant7259@mongo:27017/StockPulse

const connectDB = ()=>{

    mongoose.connect(mongo_uri).then((data)=>{
        console.log(`MongoDB connected with server :${data.connection.host}`);
    }).catch((error) => {
        console.error('MongoDB connection error:', error.message);
    });

}

module.exports = connectDB;