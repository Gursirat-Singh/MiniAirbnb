const Listing = require("../Models/listing");
const mongoose = require("mongoose");
const CustomError = require("../utils/ExpressError");

//index route 
module.exports.index = async (req, res) => {
    const Listings = await Listing.find({});
    res.render("listings/index.ejs", { Listings });
}

//New Listing Form
module.exports.newListingForm = (req, res) => {
    res.render("listings/new.ejs");
}

//Show Listing
module.exports.showListing = async (req, res, next) => {
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
}

//create Listing
module.exports.createListing = async (req, res, next) => {
    if (!req.body.listing) {
        throw new CustomError(400, "Data Incomplete");
    }
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created Successfully!");
    res.redirect("/listings");
}

//Edit Listing Form
module.exports.editListingForm = async (req, res) => {
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
}

//Update Listing
module.exports.updateListing = async (req, res) => {
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
}

//Destroy Listing
module.exports.destroyListing = async (req, res) => {
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
}

