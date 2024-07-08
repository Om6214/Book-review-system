const express = require("express");
const Router = express.Router();
const authcontroller = require("../controller/auth-controller");
const authmiddleware = require("../middlewares/auth_middleware");
const validate = require("../middlewares/validate_middleware");
const Schema = require("../validators/auth-validators");

Router.route("/user/registration").post(
  validate(Schema.signupSchema),
  authcontroller.registration
);
Router.route("/user/login").post(
  validate(Schema.loginSchema),
  authcontroller.login
);
Router.route("/getusers").get(authmiddleware, authcontroller.getusers);
Router.route("/getusers/:id").get(authcontroller.getuserById);

module.exports = Router;
