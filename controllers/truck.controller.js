const TruckRecpDB = require("../models/truckrecpt.model");


const getAllTruckRecpt = async (req, res) => {
    try {
        const allTruckRecpt = await TruckRecpDB.find();
        if (allTruckRecpt) {
            res.status(200).send({
                success: true,
                message: "Some truck recpt are found",
                data: allTruckRecpt
            })
        } else {
            res.status(404).send({
                success: false,
                message: "no data found"
            })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }

}



// get single truckData
const getSingleTruckData = async (req, res) => {
    const id = req.params.id;
    const singleTruckData = await TruckRecpDB.findById(id);
    if (singleTruckData) {
        res.status(201).send({
            success: true,
            message: "Truck data found",
            data: singleTruckData
        })
    } else {
        res.status(404).send({
            success: false,
            message: "Truck data not found"
        })
    }
}


const getTruckRecpt = async (req, res) => {
    const newTruckRecpt = await TruckRecpDB(req.body)
    const dbRes = newTruckRecpt.save();
    console.log(dbRes);
    res.status(201).send({
        success: true,
        message: "Truck Rec saved successfully",
        data: newTruckRecpt
    })

}

const updateTruckrecpt = async (req, res) => {
    const id = req.params.id;
    const checkId = await TruckRecpDB.findOne({_id: id});
    if (checkId) {
        const updateTruck = await TruckRecpDB.findByIdAndUpdate(id, req.body);
        res.status(200).send({
            success: true,
            message: "client updated successfully",
            data: updateTruck
        })
    } else {
        res.status(404).send({
            success: false,
            message: "no data found"
        })
    }
}

const deleteTruckRecpt = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const checkId = await TruckRecpDB.findOne({_id: id});
    if (checkId) {
        const deleteClient = await TruckRecpDB.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "client deleted successfully",
        })
    } else {
        res.status(404).send({
            success: false,
            message: "no data found"
        })
    }
}

module.exports = { getTruckRecpt, getAllTruckRecpt, getSingleTruckData, deleteTruckRecpt, updateTruckrecpt };