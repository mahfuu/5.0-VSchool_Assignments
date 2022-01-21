const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    partName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    make: String,
    year: Number
})

module.exports = mongoose.model("InventoryModel", inventorySchema)