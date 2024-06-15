const express = require("express")
const Router = express.Router()
const registeration = require("../controller/auth-controller")

Router.route("/user/registration").post(registeration)

module.exports = Router;