const { HomeUsers } = require("../models/raf.users.models")


// get all users 
const getAllUsers = async (req, res) => {
    try {
        const users = await HomeUsers.find();
        if (users) {
            res.status(201).send({
                success: true,
                message: "all users found successfully",
                usersFound: users.length,
                data: users
            })
        } else {
            res.status(404).send({
                success: false,
                message: "no data found",
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}


// get a user by ID 
const getOneUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await HomeUsers.findById({ _id: id });
        if (user) {
            res.status(201).send({
                success: true,
                message: "user found successfully",
                data: user
            })
        } else {
            res.status(404).send({
                success: false,
                message: "no data found",
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}


// create a user 
const postUser = async (req, res) => {
    try {
        const { name, age, address, phone, email, phoneModel } = req.body;
        const newUser = new HomeUsers({
            name,
            age,
            address,
            phone,
            email,
            phoneModel
        });
        await newUser.save();
        res.status(202).send({
            success: true,
            message: "user added successfully",
            data: newUser
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
};


// update a user 
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, age, address, phone, email, phoneModel } = req.body;
        const updatedUser = await HomeUsers.findByIdAndUpdate({ _id: id }, { name, age, address, phone, email, phoneModel }, { new: true })
        if (updatedUser) {
            res.status(201).send({
                success: true,
                message: "user updated successfully",
                data: updatedUser
            })
        } else {
            res.status(404).send({
                success: false,
                message: "users not found",
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }

}


// delete a user 
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await HomeUsers.findByIdAndDelete({ _id: id })
        if (deletedUser) {
            res.status(201).send({
                success: true,
                message: "user deleted successfully",
                data: deletedUser
            })
        } else {
            res.status(404).send({
                success: false,
                message: "users not found",
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { postUser, getAllUsers, getOneUser, updateUser, deleteUser }