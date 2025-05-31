const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../Models/listing.js");
const User = require("../Models/user.js");

// MongoDB connection URL
const MONGO_URL = "mongodb://127.0.0.1:27017/sirastay";

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        
        // Use the existing user ID
        const ownerId = "6836115d4c477849400b38ba";
        
        // Verify the user exists
        const existingUser = await User.findById(ownerId);
        if (!existingUser) {
            throw new Error("Specified user ID does not exist in the database");
        }
        
        console.log("Using owner ID:", ownerId);

        // Map owner ID to each listing
        const listingsWithOwner = initData.data.map((obj) => ({
            ...obj,
            owner: ownerId
        }));

        const insertedListings = await Listing.insertMany(listingsWithOwner);
        console.log(`Successfully inserted ${insertedListings.length} listings`);
        
        await mongoose.connection.close();
        console.log("Database connection closed");
    } catch (err) {
        console.error("Data Initialization Error:", err);
        process.exit(1);
    }
};

// Connect and run initialization
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Database Connected!");
        return initDB();
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    });