const { getRegisterUser, registerUser, showUsers } = require("../controllers/registerUser.conterller");

const router = require("express").Router();

router.get("/", getRegisterUser);
router.get("/users", showUsers);

router.post("/", registerUser);


module.exports = router;
