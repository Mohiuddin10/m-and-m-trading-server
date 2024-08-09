const { getTruckRecpt, getAllTruckRecpt, getSingleTruckData } = require("../controllers/truck.controller");

const router = require("express").Router();


//get all truck data 
router.get("/", getAllTruckRecpt)

// get single Truck data
router.get("/:id", getSingleTruckData)
// post truck recpt 
router.post("/", getTruckRecpt)



module.exports = router;