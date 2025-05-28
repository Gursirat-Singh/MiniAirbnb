const express = require("express");
const router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");
const Review = require("../Models/reviews.js");
const Listing = require("../Models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const CustomError = require("../utils/ExpressError.js");
const { validateReview, isLoggedIn, isAuthorReview } = require("../middleware.js");
const reviewController = require("../controllers/reviewController.js");

//Adding Reviews 
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.addReview));

//Deleting a Review
router.delete("/:reviewId", isLoggedIn, isAuthorReview, wrapAsync(reviewController.destroyReview));

module.exports = router;