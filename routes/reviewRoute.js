const express = require("express");
const router = express.Router({ mergeParams: true });
const mongoose = require("mongoose");
const Review = require("../Models/reviews.js");
const Listing = require("../Models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const CustomError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");


const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new CustomError(400, errMsg);
    }
    else {
        next();
    }
};


//Adding Reviews 
router.post("/", validateReview, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        throw new CustomError(404, "Listing not found");
    }

    const newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}));

//Deleting a Review
router.delete("/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findById(reviewId);
    res.redirect(`/listings/${id}`);
}));

module.exports = router;