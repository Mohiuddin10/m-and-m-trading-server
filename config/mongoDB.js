const mongosh = require("mongoose");
require("dotenv").config();

const connectMongoDB = async () => {
    try {
        await mongosh.connect(`mongodb+srv://${process.env.User}:${process.env.Mongo_pass}@cluster0.1r4sa.mongodb.net/mmtrading?retryWrites=true&w=majority&appName=Cluster0/`)
        console.log("mongoDB connected");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectMongoDB;