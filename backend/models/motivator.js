const mongoose = require("mongoose");

const motivatorSchema = new mongoose.Schema({
    message: String,
    author: String
});

module.exports = mongoose.model("Motivator", motivatorSchema);

