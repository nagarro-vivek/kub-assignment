const mongoose = require('mongoose');


const mongoURL = `mongodb://${process.env.mongo-user}:${process.env.mongo-password}@${process.env.MONGODB_URI}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB_NAME}?authSource=admin`;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to mongoDB');
    } catch (err) {
        console.log("Error connecting to mongoDB: " + err);
    }
}

module.exports = connectDB;