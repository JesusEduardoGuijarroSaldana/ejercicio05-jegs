const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); //?

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Category.sync()
  .then(() => {
    console.log("Tabla Categoría creada o ya existe.");
  })
  .catch((error) => {
    console.log("Error al crear la tabla Categoría:", error);
  });

// Para poder usar en otro modulo
module.exports = Category; // Para poder usar Category
