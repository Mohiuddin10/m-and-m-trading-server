const { getTruckRecpt, getAllTruckRecpt, getSingleTruckData, deleteTruckRecpt, updateTruckrecpt } = require("../controllers/truck.controller");

const router = require("express").Router();


//get all truck data 
router.get("/", getAllTruckRecpt)

// get single Truck data
router.get("/:id", getSingleTruckData)
// post truck recpt 
router.post("/", getTruckRecpt)

//delete single truck data 
router.delete("/:id", deleteTruckRecpt)

// update truck data
router.put("/:id", updateTruckrecpt)




module.exports = router;