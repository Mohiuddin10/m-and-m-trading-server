const mongoose = require("mongoose")

const truckRecpDB = new mongoose.Schema({
    clientId: {
        type: String,
        require: true
    },
    truckNumber: {
        type: String,
        require: true
    },
    driverName: {
        type: String,
        require: true
    },
    driverPhone: {
        type: String,
        require: true
    },
    itemName: {
        type: String,
        require: true
    },
    weight: {
        type: Number,
        require: true
    },
    bags: {
        type: Number
    },
    sil: {
        type: String,
        require: true
    },
    fare: {
        type: Number,
        require: true
    },
    advance: {
        type: Number
    },
    netFare: {
        type: Number,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// create model 

const TruckRecpDB = mongoose.model("truckDB", truckRecpDB) //clientDB is the connection name

module.exports = TruckRecpDB;