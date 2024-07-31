const { getTruckRecpt, getAllTruckRecpt } = require("../controllers/truck.controller");

const router = require("express").Router();


//get all truck data 
router.get("/", getAllTruckRecpt)
// post truck recpt 
router.post("/", getTruckRecpt)



module.exports = router;