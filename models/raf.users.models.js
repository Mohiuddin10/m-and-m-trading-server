const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/usersDB2"); //usersDB2 is the DB name
        console.log(`usersDB2 connected`);
    } catch (error) {
        console.log(error.message);
    }
}

// create schema 
const userDb = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
        min: [1, "age can not be less then 1"],
        max: [99, "age can not be more then 99"]
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneModel: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// create model 

const HomeUsers = mongoose.model("homeUser", userDb) //homeUser is the collection name and will be save as homeUsers

module.exports = { connectDB, HomeUsers };