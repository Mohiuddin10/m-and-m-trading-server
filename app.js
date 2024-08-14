const express = require("express");
const app = express();
const registerUserRoute = require("./routes/registerUser.route");
const loginRouter = require("./routes/login.router");
const clientRouter = require("./routes/client.route")
const truckRoute = require("./routes/truck.route");
const cors = require("cors");
const TruckRecpDB = require("./models/truckrecpt.model");

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())

app.use("/client", clientRouter);

app.use("/registerUser", registerUserRoute);

app.use("/truck", truckRoute)

app.use("/login", loginRouter)

app.get("/report/:id",async (req, res) => {
    const id = req.params.id;
    const getTruckDataByClient = await TruckRecpDB.find({clientID: id})
    res.send(getTruckDataByClient)
})
module.exports = {app};