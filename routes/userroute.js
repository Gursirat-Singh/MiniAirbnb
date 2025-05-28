const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");


//get SignUp request
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

//post SignUp request
router.post("/signup", wrapAsync(async (req, res) => {
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

}));

//get Login request
router.get("/login", (req, res) => {
    res.render("users/login.ejs")
});

// post Login request
router.post("/login",saveRedirectUrl ,passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), async (req, res) => {
    req.flash("success", "Welcome back to SiraStay");
    let redirectUrl = res.locals.redirectUrl || "/listings" 
    res.redirect(redirectUrl);
});

//logout
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Good Bye, U Logged Out Sccessfully!");
        res.redirect("/listings");
    });
});


module.exports = router;