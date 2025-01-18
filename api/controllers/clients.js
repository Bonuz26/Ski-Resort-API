const mongoose = require("mongoose")

const Client = require("../models/client")

exports.clients_get_all = (req, res, next) => {
    Client.find()
    .then(clients => {
        res.status(200).json({
            message: "List of all clients:",
            list: clients
        })
    })
    .catch(err => res.status(500).json({message: err}))
}

exports.clients_add_new = (req, res, next) => {
    const client = new Client({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        email: req.body.email
    })
    client.save()
    .then(result => {
        res.status(201).json({
            message: "Successfully added new client!",
            dane: result
        })
    })
    .catch(err => res.status(500).json({message: err}))
}

exports.clients_get_by_id = (req, res, next) => {
    const id = req.params.clientId
    Client.findById(id).
    then(result => {
        res.status(200).json({
        message: "Detalis about client number " + id,
        dane: result})
    })
}

exports.clients_update = (req, res, next) => {
    const id = req.params.clientId
    Client.findByIdAndUpdate(id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        email: req.body.email
    })
    .then(() => {
        res.status(200).json({message: "Successfully saved changes for client number " + id})
    })
}

exports.clients_delete = (req, res, next) => {
    const id = req.params.clientId
    Client.findOneAndDelete(id).
    then(() => {
        res.status(200).json({message: "Removed client number " + id})
    })
}