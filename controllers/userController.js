const Listing = require("../Models/listing");
const Review = require("../Models/reviews");
const User = require("../Models/user");
const mongoose = require("mongoose");
const CustomError = require("../utils/ExpressError");

module.exports.signUpForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signUp = async (req, res) => {
    try {
        let { username, password, email } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to SiraStay");
            res.redirect("/listings");
        });

    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

}

module.exports.logInForm = (req, res) => {
    res.render("users/login.ejs")
}


module.exports.logIn = async (req, res, next) => {
    try {
        req.flash("success", "Welcome back to SiraStay");
        let redirectUrl = res.locals.redirectUrl || "/listings"
        res.redirect(redirectUrl);
    } catch (err) {
        next(err);
    }
}

module.exports.logOut = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Good Bye, U Logged Out Sccessfully!");
        res.redirect("/listings");
    });
}
