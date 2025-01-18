const mongoose = require("mongoose")

const Rent = require("../models/rent")

exports.rentals_get_all = (req, res, next) => {
    Rent.find()
    .populate("clientId", "lastName")
    .populate("equipmentId", "name pricePerDay")
    .then(rentals => {
        res.status(200).json({
            message: "List of all existing rentals:",
            list: rentals
        })
    })
    .catch(err => res.status(500).json({message: err}))
}

exports.rentals_add_new = (req, res, next) => {
    const rent = new Rent({
        _id: new mongoose.Types.ObjectId(),
        equipmentId: req.body.equipmentId,
        clientId: req.body.clientId,  
        startDay: new Date(req.body.startDay),
        endDay: new Date(req.body.endDay),
        status: req.body.status
    })
    rent.save()
    .then(result => {
        res.status(201).json({
            message: "Successfully added new rent!",
            data: result
        })
    })
    .catch(err => res.status(500).json({message: err}))
}

exports.rentals_get_by_id = (req, res, next) => {
    const id = req.params.rentId
    Rent.findById(id)
    .populate("clientId", "lastName")
    .populate("equipmentId", "name pricePerDay")
    .then(result => {
        res.status(200).json({
        message: "Details for rent number " + id,
        data: result})
    })
}

exports.rentals_update = (req, res, next) => {
    const id = req.params.rentId
    Rent.findByIdAndUpdate(id, {
        equipmentId: req.body.equipmentId,
        clientId: req.body.clientId,
        startDay: new Date(req.body.startDay),
        endDay: new Date(req.body.endDay),
        status: req.body.status
    })
    .then(() => {
        res.status(200).json({message: "Successfully saved changes for rent number " + id})
    })
}

exports.rentals_delete = (req, res, next) => {
    const id = req.params.rentId
    Rent.findOneAndDelete(id).
    then(() => {
        res.status(200).json({message: "Removed rent number " + id})
    })
}