const mongoose = require("mongoose")

const usersDB = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// create model 

const UsersBO = mongoose.model("usersDB", usersDB) //usersDB is the connection name

module.exports = UsersBO;