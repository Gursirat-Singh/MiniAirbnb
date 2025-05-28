const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Listing = require("../Models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const CustomError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

//Index Route
router.get("/", validateListing, async (req, res) => {
  const Listings = await Listing.find({});
  res.render("listings/index.ejs", { Listings });
});

// New Route
router.get("/new", isLoggedIn, (req, res) => {
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
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
      req.flash("error", "Listing Not Found!");
      return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
  })
);

// Create Route
router.post(
  "/", isLoggedIn, validateListing,
  wrapAsync(async (req, res, next) => {
    if (!req.body.listing) {
      throw new CustomError(400, "Data Incomplete");
    }
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created Successfully!");
    res.redirect("/listings");
  })
);

// Edit Route
router.get("/:id/edit", validateListing, isLoggedIn, isOwner, async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "Invalid Listing ID");
  }
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing Not Found!");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
});

// Update Route
router.put("/:id", validateListing, isLoggedIn, isOwner, wrapAsync(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "Invalid Listing ID");
  }
  let listing = await Listing.findById(id);
  if (!listing) {
    throw new CustomError(400, "Listing Not Found");
  }
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Listing Updated Successfully!");
  res.redirect(`/listings/${id}`);
}));

// Delete Route
router.delete("/:id", isLoggedIn, isOwner, async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError(400, "Invalid Listing ID");
  }
  const dellisting = await Listing.findByIdAndDelete(id);
  if (!dellisting) {
    throw new CustomError(400, "Listing Not Found");
  }
  req.flash("success", "Listing Deleted Successfully!");
  res.redirect("/listings");
});


module.exports = router;