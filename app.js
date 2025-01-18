require('dotenv').config()

const express = require("express")

const app = express()

// connection with DB
const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xbpbo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
    console.log('Connected with DB');
})
.catch((err) => {
    console.log('Error:', err);
});
const morgan = require("morgan")
app.use(morgan("dev"))

const bodyParser = require("body-parser")
app.use(bodyParser.json())

const clientRoutes = require("./api/routes/clients")
const equipmentRoutes = require("./api/routes/equipment")
const rentRoutes = require("./api/routes/rentals")
const userRoutes = require("./api/routes/users")

app.use("/clients", clientRoutes)
app.use("/equipment", equipmentRoutes)
app.use("/rentals", rentRoutes)
app.use("/users", userRoutes)

app.use((req, res, next) => {
    res.status(404).json({message: "Not found"})
})

module.exports = app