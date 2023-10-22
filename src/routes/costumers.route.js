const express = require("express");
const router = express.Router();
const costumerController = require("../controllers/costumers.controller");

// Definir las rutas
router.get("/", costumerController.getCostumers);
router.get("/:id", costumerController.getCostumer);
router.post("/", costumerController.createCostumer);
router.put("/:id", costumerController.updateCostumer);
router.delete("/:id", costumerController.deleteCostumer);

module.exports = router;
