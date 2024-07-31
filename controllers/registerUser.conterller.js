const path = require("path");
const UsersBO = require("../models/registerUsers.model");
const bcrypt = require("bcrypt");
const saltRound = 10;


// const getRegisterUser = (req, res) => {
//     res.sendFile(path.join(__dirname+"/views/register.html"))
// }

const getRegisterUser = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"))
}

const showUsers = async (req, res) => {
    const users = await UsersBO.find();
    res.status(200).send({
        success: true,
        message: "find users successfully",
        data: users
    })
}

const registerUser = (req, res) => {
    const email = req.body.email;
    let password;
    bcrypt.hash(req.body.password, saltRound, async (err, hash) => {
        password = hash;
        const newUser = new UsersBO({ email, password })
        newUser.save();
        res.status(201).send({
            success: true,
            message: "user created",
            data: newUser
        })
    })

}

module.exports = { getRegisterUser, registerUser, showUsers };