const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/user")

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err) {
        res.status(500).json({message: err})
        return
    }
    
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash,
        })
        user.save().then(() => res.status(201).json({message: "User successfully added"}))
    })
})


router.post("/login", (req, res, next) => {
    User
    .findOne({email: req.body.email})
    .then(user => {
        if(!user) return res.status(404).json({message: "Authorization error"})
        bcrypt.compare(req.body.password, user.password, (err, result) => {
        if(err) return res.status(500).json({message: err})
        if(!result) return res.status(404).json({message: "Authorization error"})
        const token = jwt.sign({user:user._id, email:user.email}, process.env.JWT_KEY, {expiresIn: "1d"})
        return res.status(200).json({message: token})
        })
    })
})

module.exports = router

