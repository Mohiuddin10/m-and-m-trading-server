const { app } = require("./app");
require("dotenv").config();
const connectMongoDB = require("./config/mongoDB");
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running at port: http://localhost:${PORT}`);
    connectMongoDB();
})