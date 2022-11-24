const router = require("express").Router();
const { loginUser, verifyUser } = require("../controllers/controller")
router.post("/login", loginUser)
router.get("/verify", verifyUser)

module.exports = {router}