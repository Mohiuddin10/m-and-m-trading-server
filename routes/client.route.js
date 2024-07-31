const { getAllClient, createClient, updateClient, deleteClient, clientPage } = require("../controllers/client.controller");

const router = require("express").Router();

// client html page load 
router.get("/client", clientPage)

// get all client data 
router.get("/", getAllClient)


// create a new client 
router.post("/", createClient)

// update client info
router.put("/:id", updateClient)

// delete client data
router.delete("/:id", deleteClient)
module.exports = router;