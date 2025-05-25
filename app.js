const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./Models/listing");
const review = require("./Models/reviews.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const CustomError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// Database Connection
const mongo_url = "mongodb://127.0.0.1:27017/sirastay";
async function main() {
  await mongoose.connect(mongo_url);
}
main()
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.log("Error Occurred, Please Check the Issue"));

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to My StaySira");
});

// Server Start
app.listen(8080, () => {
  console.log("Server Started");
});

// Test Route
app.get("/testListing", async (req, res) => {
  const sampleListing = new Listing({
    title: "My new Villa",
    description: "By the beach",
    image: "",
    price: 15000,
    location: "calangute, Goa",
    country: "India",
  });
  await sampleListing.save();
  console.log("Sample Saved");
  res.send("Test Successful");
});

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
const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new CustomError(400, errMsg);
  }
  else {
    next();
  }
}

// Index Route
app.get("/listings", validateListing, async (req, res) => {
  const Listings = await Listing.find({});
  res.render("listings/index.ejs", { Listings });
});

// New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
app.get(
  "/listings/:id", validateListing,
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
app.post(
  "/listings", validateListing,
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
app.get("/listings/:id/edit", validateListing, async (req, res) => {
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
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
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
app.delete("/listings/:id",  async (req, res) => {
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


//Adding Reviews 
app.post("/listing/:id/reviews", validateReview, wrapAsync(async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new review(req.body.review)
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  res.redirect(`/listings/${listing._id}`);
}));

//Deleting a Review
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await review.findById(reviewId);
  res.redirect(`/listings/${id}`);
}));


//All Error Handler
app.all(/.*/, (req, res) => {
  const message = "Page not Found"
  res.status(404).render("listings/error.ejs", { message });
});

// Global Error Handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.render("listings/error.ejs", { message })
  // res.status(statusCode).send(message);
});