const Category = require("../models/categories.model.js");

exports.getCategories = async (req, res) => {
  console.log("entré al getAll");
  try {
    const categories = await Category.findAll();
    res.status(200).json({
      status: 1,
      message: "Categorías encontradas.",
      categories: categories,
    });
  } catch (error) {
    res.status(404).json({
      status: 0,
      message: "Categorías no encontradas.",
      categories: [],
    });
  }
};
exports.getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(404).json({
        status: 0,
        message: "Categoría no encontrada.",
        category: null,
      });
    } else {
      res.status(200).json({
        status: 1,
        message: "Categoría encontrada",
        category,
      });
    }
  } catch {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};
exports.createCategory = async (req, res) => {
  const { description } = req.body;
  try {
    if (!description) {
      res.status(400).json({
        status: 0,
        message: "Faltan parámetros.",
        category: null,
      });
    } else {
      const category = await Category.create({ description });
      res.status(200).json({
        status: 1,
        message: "Categoría creada correctamente.",
        category,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(404).json({
        status: 0,
        message: "Categoría no encontrada.",
      });
    } else {
      if (!description) {
        res.status(400).json({
          status: 0,
          message: "Faltan parámetros.",
          category: null,
        });
      } else {
        await category.update({ description });
        res.status(200).json({
          status: 1,
          message: "Categoría actualizada correctamente.",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(404).json({
        status: 0,
        message: "Categoría no encontrada.",
      });
    } else {
      await category.destroy();
      res.status(200).json({
        status: 1,
        message: "Categoría eliminada correctamente.",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};
