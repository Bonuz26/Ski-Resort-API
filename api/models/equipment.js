const mongoose = require("mongoose")

const equipmentSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    type: String,
    size: String,
    status: String,
    pricePerDay: Number
})

module.exports = mongoose.model("Equipment", equipmentSchema)