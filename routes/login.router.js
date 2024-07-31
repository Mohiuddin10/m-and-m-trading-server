const router = require("express").Router();
const { getLogin, loginUser } = require("../controllers/loginUser.controller");



router.get("/", getLogin);

router.post("/", loginUser)


module.exports = router;