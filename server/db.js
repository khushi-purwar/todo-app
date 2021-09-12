const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        };
        const uri = "mongodb+srv://khushi14:khushipurwar@todoapp.vrinj.mongodb.net/todo-app?retryWrites=true&w=majority";
        await mongoose.connect(
            // "mongodb://localhost/todo-app",
            uri,
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
