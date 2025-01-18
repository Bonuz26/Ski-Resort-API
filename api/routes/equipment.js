const express = require("express")
const router = express.Router()

const EquipmentController = require("../controllers/equipment")

const checkAuth = require("../middleware/checkAuth")

router.post("/", checkAuth, EquipmentController.equipment_add_new)

router.get("/", EquipmentController.equipment_get_all)

router.get("/:equipmentId", checkAuth, EquipmentController.equipment_get_by_id)

router.put("/:equipmentId", checkAuth, EquipmentController.equipment_update)

router.delete("/:equipmentId", checkAuth, EquipmentController.equipment_delete)

module.exports = router

