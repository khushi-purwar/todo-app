const mongoose = require("mongoose");
require('dotenv').config();
module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };
        const uri = process.env.MONGO_URI;
    
        await mongoose.connect(
            uri,
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
