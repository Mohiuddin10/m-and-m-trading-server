const mongoose = require("mongoose")

const clientDB = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// create model 

const ClientDB = mongoose.model("clientDB", clientDB) //clientDB is the connection name

module.exports = ClientDB;