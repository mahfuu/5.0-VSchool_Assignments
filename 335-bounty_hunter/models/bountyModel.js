const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Bounty Blueprint
const bountySchema = new Schema({
    firstName: String,
    lastName: String,
    living: Boolean,
    bountyPrice: String,
    guild: String
})

module.exports = mongoose.model("Contract", bountySchema)