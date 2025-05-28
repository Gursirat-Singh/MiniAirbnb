const Listing = require("../Models/listing");
const Review = require("../Models/reviews");
const mongoose = require("mongoose");
const CustomError = require("../utils/ExpressError");

//Adding Review
module.exports.addReview = async (req, res) => {
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
}

//Destroy Review
module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findById(reviewId);
    req.flash("success", "Review Deleted Successfully!");
    res.redirect(`/listings/${id}`);
}