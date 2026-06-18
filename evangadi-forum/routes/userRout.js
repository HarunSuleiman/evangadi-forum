

const express = require("express");
const router = express.Router();

//import controller functions
const { register, login, checkUser } = require("../controller/userController");

//register route
router.post("/register", register);

//login route
router.post("/login", login);

//check user
router.get("/check", checkUser);

//module export
module.exports = router;
