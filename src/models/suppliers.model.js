const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Supplier = sequelize.define("Supplier", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Supplier.sync()
  .then(() => {
    console.log("Tabla Proveedor creada o ya existe.");
  })
  .catch((error) => {
    console.log("Error al crear la tabla Proveedor:", error);
  });

module.exports = Supplier;
