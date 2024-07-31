const express = require("express");
const app = express();
const registerUserRoute = require("./routes/registerUser.route");
const loginRouter = require("./routes/login.router");
const clientRouter = require("./routes/client.route")
const truckRoute = require("./routes/truck.route");
const cors = require("cors");

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())

app.use("/client", clientRouter);

app.use("/registerUser", registerUserRoute);

app.use("/truck", truckRoute)

app.use("/login", loginRouter)
module.exports = {app};