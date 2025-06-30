if (process.env.NODE_ENV != "production") {
  require('dotenv').config();
}
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
const userRoute = require("./routes/userroute.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./Models/user.js");
const { error } = require('console');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


// Database Connection
const dbUrl = process.env.MONGO_ATLAS;

if (!dbUrl) {
  console.error("MongoDB connection string is missing!");
  process.exit(1);
}

mongoose.set('strictQuery', false);
mongoose.connect(dbUrl)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1);
  });


// Server Start
app.listen(8080, () => {
  console.log("Server Started");
});


const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("Error!!", error);
});

//Sessions
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 1000,
    httpOnly: true,
  },
};




app.use(session(sessionOptions));
app.use(flash());

//Password Authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Password test demo
// app.get("/demouser",async(req,res)=>{
//   let fakeUser = new User({
//     email:"Student@gmail.com",
//     username:"Demo Student"
//   });
//   let registeredUser = await User.register(fakeUser,"helloWorld");
//   res.send(registeredUser);
// })

//Locals
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});
app.get('/', (req, res) => {
  res.redirect('/listings');
});

app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", reviewRoute);
app.use("/", userRoute);


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
