const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listModel = require("./Models/listing");
const path = require("path");
const Listing = require("./Models/listing");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);


//Database Connection
const mongo_url = "mongodb://127.0.0.1:27017/sirastay";
async function main(){
    await mongoose.connect(mongo_url);
};
main().then((res)=>{
    console.log("Database Connection Successful");
}).catch((err)=>{
    console.log("Error Occured, Plz Check the issue")
});

//Root Response
app.get("/",(req,res)=>{
    res.send("Welcome to My StaySira");
});

//Server Start Test
app.listen(8080,()=>{
    console.log("Server Started")
});

//Listing Testing
app.get("/testListing",async(req,res)=>{
    let sampleListing =  new listModel({
        title:"My new Villa",
        description:"By the beach",
        image:"",
        price:15000,
        location:"calangute, Goa",
        country:"India",
    });
    await sampleListing.save();
    console.log("Sample Saved");
    res.send("Test Successful")
});

//Index Route

app.get("/listings",async (req,res)=>{
    const Listings = await listModel.find({});
    res.render("listings/index.ejs",{Listings});
});

//New Route

app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
})

//Show Route

app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    const listing = await listModel.findById(id);
    res.render("listings/show.ejs",{listing});
});

//Create Route
app.post("/listings",async(req,res)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

//Edit Route
app.get("/listing/:id/edit", async (req,res)=>{
    let {id} = req.params;
    const listing = await listModel.findById(id);
    res.render("listings/edit.ejs",{listing});
})

//Update Route
app.put("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    const listing = await listModel.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//Delete Route

app.delete("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    const dellisting = await listModel.findByIdAndDelete(id);
    console.log(dellisting);
    res.redirect("/listings");
});