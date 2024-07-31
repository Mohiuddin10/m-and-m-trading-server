const router = require("express").Router();
const { postUser, getAllUsers, getOneUser, updateUser, deleteUser } = require("../controllers/users.controller");




router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", postUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser)

module.exports = router;