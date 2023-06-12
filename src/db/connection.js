const mongoose = require("mongoose");

const mongoURL = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGODB_URI}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB_NAME}?authSource=admin`;

console.log("mongoURL", mongoURL);
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log("Error connecting to mongoDB: " + err);
  }
};

module.exports = connectDB;
