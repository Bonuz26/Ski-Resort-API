const mongoose = require("mongoose")

const rentSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    equipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Equipment"
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    },
    startDay: Date,
    endDay: Date,
    status: String
})

module.exports = mongoose.model("Rent", rentSchema)