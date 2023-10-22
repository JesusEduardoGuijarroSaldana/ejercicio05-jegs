const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categories.controller");

// Definir las rutas
router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategory);
router.post("/", categoryController.createCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
