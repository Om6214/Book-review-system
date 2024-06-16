const express = require("express")
const Router = express.Router()
const authcontroller = require("../controller/auth-controller")
const validate = require("../middlewares/validate_middleware")
const Schema = require("../validators/auth-validators")

Router.route("/user/registration").post(validate(Schema.signupSchema), authcontroller.registration)
Router.route("/user/login").post(validate(Schema.loginSchema),authcontroller.login)

module.exports = Router;