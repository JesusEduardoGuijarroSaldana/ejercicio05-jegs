const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Costumer = require("./costumers.model");

const Bill = sequelize.define("Bill", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  costumerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Costumer,
      key: "id",
    },
  },
});

Bill.sync()
  .then(() => {
    console.log("Tabla Factura creada o ya existe.");
  })
  .catch((error) => {
    console.log("Error al crear la tabla Factura:", error);
  });

module.exports = Bill;
