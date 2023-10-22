const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Category = require("./categories.model");
const Supplier = require("./suppliers.model");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "id",
    },
  },
  supplierId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Supplier,
      key: "id",
    },
  },
});

Product.sync()
  .then(() => {
    console.log("Tabla Producto creada o ya existe.");
  })
  .catch((error) => {
    console.log("Error al crear la tabla Producto:", error);
  });

module.exports = Product;
