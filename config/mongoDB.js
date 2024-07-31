const mongosh = require("mongoose");
require("dotenv").config();

const connectMongoDB = async () => {
    try {
        await mongosh.connect(process.env.MONGO_URL)
        console.log("mongoDB connected");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectMongoDB;