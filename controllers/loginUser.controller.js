const path = require("path");
const bcrypt = require("bcryptjs");
const UsersBO = require("../models/registerUsers.model");

const getLogin = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/login.html"))
}


const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await UsersBO.findOne({ email })

    // const validUser = await bcrypt.compare(password, user.password);
    // console.log(validUser);
    bcrypt.compare(password, user.password, (err, hash) => {
        console.log(hash);
        if (hash) {
            res.status(200).send({
                success: true,
                message: "user valid",
            })
        } else {
            res.status(404).send({
                success: false,
                message: "user is not valid"
            })
        }
    })
}


module.exports = { getLogin, loginUser }