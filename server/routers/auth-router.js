const express = require("express")
const Router = express.Router()
const authcontroller = require("../controller/auth-controller")

Router.route("/products").get(authcontroller.getProducts)

module.exports = Router;