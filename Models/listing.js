const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const review = require("./reviews.js");
const { required } = require("joi");
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        filename: { type: String },
        url: {
            type: String,
            default: "https://imgs.search.brave.com/jiQUwntTB6tYN3cN4cHQmTWZpsRRfZWBt56BftL2c80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS81OC8z/OS9wdlhKdFkuanBn"
        }
    },
    price: {
        type: Number,
        default: 15000,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }],
    owner: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }]
});
listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await review.deleteMany({ _id: { $in: listing.reviews } });
    }
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;