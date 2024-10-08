const ClientDB = require("../models/client.model")
const path = require("path");

// client inpute page load start
const clientPage = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/client.html"))
}
// client inpute page load end


// find a specific client
const findSingleClient = async (req, res) => {
    const id = req.params.id;
    try {
        const findUser = await ClientDB.findById({_id: id});
        if(findUser) {
            res.status(201).send({
                success: true,
                message: "Client found",
                data: findUser
            })
        } else {
            res.status(404).send({
                success: false,
                message: "Client Not Found"
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something Broken"
        })
    }
    
}
// get all client data 
const getAllClient = async (req, res) => {
    const allClients = await ClientDB.find();
    if (allClients.length > 0) {
        res.status(200).send({
            success: true,
            message: "successfully all client data loaded",
            data: allClients
        })
    } else {

        res.status(404).send({
            success: false,
            message: "no client data found"
        })
    }
}

// create a new client 

//2nd update ===> check duplicate phone number
const createClient = async (req, res) => {
    // const newClient1 = req.body;
    // console.log(newClient1);
    const phone = req.body.phone;
    const findDuplicatePhone = await ClientDB.findOne({ phone });
    if (!findDuplicatePhone) {
        try {
            const newClient = await new ClientDB(req.body)
            newClient.save();
            res.status(201).send({
                success: true,
                message: "new client added successfully",
                data: newClient
            })
        } catch (error) {
            res.status(404).send({
                success: false,
                message: "something broken"
            })
        }
    } else {
        res.status(404).send({
            success: false,
            message: "Already this client is added in database"
        })
    }


}

// update a client 
const updateClient = async (req, res) => {
    const id = req.params.id;
    const findClient = await ClientDB.findByIdAndUpdate(id, req.body);
    // a single issue will arise that if the user put one field empty then it will be empty in database 
    if (findClient) {
        res.status(202).send({
            success: true,
            message: "client updated successfully",
            data: findClient
        })
    } else {
        res.status(404).send({
            success: false,
            message: "somethings broken",
        })
    }
}


// delete a client 

const deleteClient = async (req, res) => {
    const id = req.params.id;
    const checkId = await ClientDB.findOne({_id: id});
    if (checkId) {
        const deleteClient = await ClientDB.findByIdAndDelete(checkId);
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


module.exports = { getAllClient, createClient, updateClient, deleteClient, clientPage, findSingleClient }