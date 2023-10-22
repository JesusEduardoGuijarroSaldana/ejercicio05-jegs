const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/suppliers.controller");

// Definir las rutas
router.get("/", supplierController.getSuppliers);
router.get("/:id", supplierController.getSupplier);
router.post("/", supplierController.createSupplier);
router.put("/:id", supplierController.updateSupplier);
router.delete("/:id", supplierController.deleteSupplier);

module.exports = router;
