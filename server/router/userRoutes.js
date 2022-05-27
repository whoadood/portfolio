const express = require("express");
const router = express.Router();
const { postLogin, postRegister } = require("../controller/userController");
const adminCheck = require("../middleware/adminCheck");
const authCheck = require("../middleware/authCheck");
const isLoggedin = require("../middleware/isLoggedin");

router.post("/login", postLogin);

router.post("/register", authCheck, isLoggedin, adminCheck, postRegister);

module.exports = router;
