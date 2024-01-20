const mongoose = require('mongoose')



let mongo_uri="mongodb://root:secret@mongo:27017/Helputrade?authSource=admin"

const connectDB = ()=>{

    mongoose.connect(mongo_uri).then((data)=>{
        console.log(`MongoDB connected with server :${data.connection.host}`);
    }).catch((error) => {
        console.error('MongoDB connection error:', error.message);
    });

}

module.exports = connectDB;