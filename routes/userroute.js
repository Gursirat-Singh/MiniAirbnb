const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/userController");

router.route("/signup")
    //get SignUp request
    .get(userController.signUpForm)
    //post SignUp request
    .post(wrapAsync(userController.signUp));

router.route("/login")
    //get Login request
    .get(userController.logInForm)

    // post Login request
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), userController.logIn);

//logout
router.get("/logout", userController.logOut);


module.exports = router;