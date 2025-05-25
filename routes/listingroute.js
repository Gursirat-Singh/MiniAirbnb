const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Listing = require("../Models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const CustomError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");



const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new CustomError(400, errMsg);
  }
  else {
    next();
  }
};

//Index Route
router.get("/", validateListing, async (req, res) => {
  const Listings = await Listing.find({});
  res.render("listings/index.ejs", { Listings });
});

// New Route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
router.get(
  "/:id", validateListing,
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError(400, "Invalid Listing ID");
    }
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      throw new CustomError(404, "Listing Not Found");
    }
    res.render("listings/show.ejs", { listing });
  })
);

// Create Route
router.post(
  "/", validateListing,
  wrapAsync(async (req, res, next) => {
    if (!req.body.listing) {
      throw new CustomError(400, "Data Incomplete");
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

// Edit Route
router.get("/:id/edit", validateListing, async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "Invalid Listing ID");
  }
  const listing = await Listing.findById(id);
  if (!listing) {
    throw new CustomError(400, "Listing Not Found");
  }
  res.render("listings/edit.ejs", { listing });
});

// Update Route
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "Invalid Listing ID");
  }
  const listing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  });
  if (!listing) {
    throw new CustomError(400, "Listing Not Found");
  }
  res.redirect(`/listings/${id}`);
}));

// Delete Route
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "Invalid Listing ID");
  }
  const dellisting = await Listing.findByIdAndDelete(id);
  if (!dellisting) {
    throw new CustomError(400, "Listing Not Found");
  }
  console.log(dellisting);
  res.redirect("/listings");
});


module.exports = router;