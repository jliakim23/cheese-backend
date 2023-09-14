const mongoose = require('../db/connection');

const cheeseSchema = new mongoose.Schema({
    name: String,
    countryOfOrigin: String,
    image: String
});

const Cheese = mongoose.model("Cheese", cheeseSchema);

module.exports = Cheese;