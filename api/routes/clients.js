const express = require("express")
const router = express.Router()

const ClientController = require("../controllers/clients")

const checkAuth = require("../middleware/checkAuth")

router.post("/", checkAuth, ClientController.clients_add_new)

router.get("/", ClientController.clients_get_all)

router.get("/:clientId", checkAuth, ClientController.clients_get_by_id)

router.put("/:clientId", checkAuth, ClientController.clients_update)

router.delete("/:clientId", checkAuth, ClientController.clients_delete)

module.exports = router

