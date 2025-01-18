const mongoose = require("mongoose")

const clientSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    address: String,
    email: String
})

module.exports = mongoose.model("Client", clientSchema)