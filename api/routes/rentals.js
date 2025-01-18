const express = require("express")
const router = express.Router()

const RentController = require("../controllers/rentals")

const checkAuth = require("../middleware/checkAuth")

router.post("/", checkAuth, RentController.rentals_add_new)

router.get("/", RentController.rentals_get_all)

router.get("/:rentId", checkAuth, RentController.rentals_get_by_id)

router.put("/:rentId", checkAuth, RentController.rentals_update)

router.delete("/:rentId", checkAuth, RentController.rentals_delete)

module.exports = router

