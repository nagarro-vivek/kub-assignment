const mongoose = require('mongoose');

const mongoURL = process.env.MONGODB_URI;

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