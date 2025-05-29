const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Listing = require("../Models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const CustomError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listingController.js");
const multer = require("multer");
const storage = require("../cloudConfig.js");
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5 
  }
});

router.route("/")
  // Index Route 
  .get(wrapAsync(listingController.index))
  // Create Route
  .post(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing),
  );

router.route("/new")
  // New Route
  .get(isLoggedIn, listingController.newListingForm);


router.route("/:id")
  // Show Route
  .get(wrapAsync(listingController.showListing))
  // Update Route
  .put(
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    isOwner,
    wrapAsync(listingController.updateListing)
  )
  // Delete Route
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );

router.route("/:id/edit")
  //edit route
  .get(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.editListingForm)
  );

module.exports = router;