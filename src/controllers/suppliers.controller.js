const Supplier = require("../models/suppliers.model.js");

exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.status(200).json({
      status: 1,
      message: "Proveedores encontrados.",
      suppliers,
    });
  } catch (error) {
    res.status(404).json({
      status: 0,
      message: "Proveedores no encontrados.",
      suppliers: [],
    });
  }
};
exports.getSupplier = async (req, res) => {
  const { id } = req.params;
  try {
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      res.status(404).json({
        status: 0,
        message: "Proveedor no encontrado.",
        supplier: null,
      });
    } else {
      res.status(200).json({
        status: 1,
        message: "Proveedor encontrado.",
        supplier,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};

exports.createSupplier = async (req, res) => {
  const { name, adress, phone } = req.body;
  try {
    if (!name | !adress | !phone) {
      res.status(400).json({
        status: 0,
        message: "Faltan parámetros.",
        supplier: null,
      });
    } else {
      const supplier = await Supplier.create({ name, adress, phone });
      res.status(200).json({
        status: 1,
        message: "Proveedor creado correctamente.",
        supplier,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};
exports.updateSupplier = async (req, res) => {
  const { id } = req.params;
  const { name, adress, phone } = req.body;
  try {
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      res.status(404).json({
        status: 0,
        message: "Proveedor no encontrado.",
      });
    } else {
      if (!name | !adress | !phone) {
        res.status(400).json({
          status: 0,
          message: "Faltan parámetros.",
          category: null,
        });
      } else {
        await supplier.update({ name, adress, phone });
        res.status(200).json({
          status: 1,
          message: "Proveedor actualizado correctamente.",
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
exports.deleteSupplier = async (req, res) => {
  const { id } = req.params;
  try {
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      res.status(404).json({
        status: 0,
        message: "Proveedor no encontrado.",
      });
    } else {
      await supplier.destroy();
      res.status(200).json({
        status: 1,
        message: "Proveedor eliminado correctamente.",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};
