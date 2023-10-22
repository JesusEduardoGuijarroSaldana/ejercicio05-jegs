const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Bill = require("./bills.model");
const Product = require("./products.model");

const Sale = sequelize.define("Sale", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  billId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Bill,
      key: "id",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "id",
    },
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Sale.sync()
  .then(() => {
    console.log("Tabla Ventas creada o ya existe.");
  })
  .catch((error) => {
    console.log("Error al crear la tabla Ventas:", error);
  });

module.exports = Sale;
