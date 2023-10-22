const Costumer = require("../models/costumers.model.js");

exports.getCostumers = async (req, res) => {
  try {
    const costumers = await Costumer.findAll();
    res.status(200).json({
      status: 1,
      message: "Clientes encontrados.",
      costumers,
    });
  } catch (error) {
    res.status(404).json({
      status: 0,
      message: "Clientes no encontrados.",
      costumers: [],
    });
  }
};

exports.getCostumer = async (req, res) => {
  const { id } = req.params;
  try {
    const costumer = await Costumer.findByPk(id);
    if (!costumer) {
      res.status(404).json({
        status: 0,
        message: "Cliente no encontrado.",
        costumer: null,
      });
    } else {
      res.status(200).json({
        status: 1,
        message: "Cliente encontrado.",
        costumer,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};
exports.createCostumer = async (req, res) => {
  const { name, adress, phone } = req.body;
  try {
    if (!name | !adress | !phone) {
      res.status(400).json({
        status: 0,
        message: "Faltan parámetros.",
        category: null,
      });
    } else {
      const costumer = await Costumer.create({ name, adress, phone });
      res.status(200).json({
        status: 1,
        message: "Cliente creado correctamente.",
        costumer,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};
exports.updateCostumer = async (req, res) => {
  const { id } = req.params;
  const { name, adress, phone } = req.body;
  try {
    const costumer = await Costumer.findByPk(id);
    if (!costumer) {
      res.status(404).json({
        status: 0,
        message: "Cliente no encontrado.",
      });
    } else {
      if (!name | !adress | !phone) {
        res.status(400).json({
          status: 0,
          message: "Faltan parámetros.",
          category: null,
        });
      } else {
        await costumer.update({ name, adress, phone });
        res.status(200).json({
          status: 1,
          message: "Cliente actualizado correctamente.",
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
exports.deleteCostumer = async (req, res) => {
  const { id } = req.params;
  try {
    const costumer = await Costumer.findByPk(id);
    if (!costumer) {
      res.status(404).json({
        status: 0,
        message: "Cliente no encontrado.",
      });
    } else {
      await costumer.destroy();
      res.status(200).json({
        status: 1,
        message: "Cliente eliminado correctamente.",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Ocurrió un error desconocido.",
    });
  }
};
