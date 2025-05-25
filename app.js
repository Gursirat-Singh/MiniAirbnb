const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./Models/listing");
const review = require("./Models/reviews.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listingRoute = require("./routes/listingroute.js");
const reviewRoute = require("./routes/reviewRoute.js");


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


app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", reviewRoute);


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