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
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new CustomError(400, "Invalid Listing ID");
        }
        const listing = await Listing.findById(id)
            .populate({
                path: "owner",
                populate: {
                    path: "username"
                }
            })
            .populate({
                path: "reviews",
                populate: {
                    path: "author"
                }
            });
        if (!listing) {
            req.flash("error", "Listing Not Found!");
            return res.redirect("/listings");
        }

        res.render("listings/show.ejs", { listing });
    } catch (err) {
        console.error("Show Listing Error:", err);
        next(err);
    }
};
//create Listing
module.exports.createListing = async (req, res, next) => {
    try {
        if (!req.file) {
            throw new CustomError(400, "Please upload an image");
        }

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };

        await newListing.save();
        req.flash("success", "New Listing Created Successfully!");
        res.redirect("/listings");
    } catch (err) {
        // Handle timeout or connection errors
        console.error("Upload Error:", err);
        req.flash("error", "Error uploading image. Please try again.");
        return res.redirect("/listings/new");
    }
};


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
    let originalImage = listing.image.url;
    originalImage = originalImage.replace("/upload", "/upload/h_150,w_150");
    res.render("listings/edit.ejs", { listing, originalImage });
}


//Update Listing
module.exports.updateListing = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new CustomError(400, "Invalid Listing ID");
        }

        let listing = await Listing.findById(id);
        if (!listing) {
            throw new CustomError(400, "Listing Not Found");
        }

        const updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

        if (req.file) {
            updatedListing.image = {
                url: req.file.path,
                filename: req.file.filename
            };
            await updatedListing.save();
        }

        req.flash("success", "Listing Updated Successfully!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error("Update Error:", err);
        req.flash("error", err.message || "Error updating listing");
        return res.redirect(`/listings/${req.params.id}/edit`);
    }
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

module.exports.searchListings = async (req, res) => {
    try {
        const { country } = req.query;
        const listings = await Listing.find({
            country: { $regex: new RegExp(country, 'i') }
        });

        if (listings.length === 0) {
            req.flash("error", "No listings found for this country!");
            return res.redirect("/listings");
        }

        res.render("listings/index.ejs", { Listings: listings });
    } catch (err) {
        console.error("Search Error:", err);
        req.flash("error", "Error occurred while searching");
        res.redirect("/listings");
    }
}