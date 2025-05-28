const express = require("express");
const router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");
const Review = require("../Models/reviews.js");
const Listing = require("../Models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const CustomError = require("../utils/ExpressError.js");
const { validateReview, isLoggedIn , isAuthorReview} = require("../middleware.js");

//Adding Reviews 
router.post("/", isLoggedIn, validateReview, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        throw new CustomError(404, "Listing not found");
    }

    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created Successfully!");
    res.redirect(`/listings/${listing._id}`);
}));

//Deleting a Review
router.delete("/:reviewId", isLoggedIn,isAuthorReview, wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findById(reviewId);
    req.flash("success", "Review Deleted Successfully!");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;