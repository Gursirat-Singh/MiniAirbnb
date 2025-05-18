const mongoose = require("mongoose");
const initData = require("./data.js")
const Listing = require("../Models/listing.js");

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

//Data Initialization

const initDB = async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data Initialized");
};

initDB();