const mongoose = require("mongoose")

const Equipment = require("../models/equipment")

exports.equipment_get_all = (req, res, next) => {
    Equipment.find()
    .then(equipment => {
        res.status(200).json({
            message: "List of all equipment:",
            list: equipment
        })
    })
    .catch(err => res.status(500).json({message: err}))
}

exports.equipment_add_new = (req, res, next) => {
    const equipment = new Equipment({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        type: req.body.type,
        size: req.body.size,
        status: req.body.status,
        pricePerDay: req.body.pricePerDay
    })
    equipment.save()
    .then(result => {
        res.status(201).json({
            message: "Successfully added new equipment!",
            data: result
        })
    })
    .catch(err => res.status(500).json({message: err}))
}

exports.equipment_get_by_id = (req, res, next) => {
    const id = req.params.equipmentId
    Equipment.findById(id).
    then(result => {
        res.status(200).json({
        message: "Details of equipment number " + id,
        data: result})
    })
}

exports.equipment_update = (req, res, next) => {
    const id = req.params.equipmentId
    Equipment.findByIdAndUpdate(id, {
        name: req.body.name,
        type: req.body.type,
        size: req.body.size,
        status: req.body.status,
        pricePerDay: req.body.pricePerDay
    })
    .then(() => {
        res.status(200).json({message: "Successfully saved changes for equipment number " + id})
    })
}

exports.equipment_delete = (req, res, next) => {
    const id = req.params.equipmentId
    Equipment.findOneAndDelete(id).
    then(() => {
        res.status(200).json({message: "Removed equipment number " + id})
    })
}