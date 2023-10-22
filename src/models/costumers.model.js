const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Costumer = sequelize.define("Costumer", {
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

Costumer.sync()
  .then(() => {
    console.log("Tabla Clientes creada o ya existente.");
  })
  .catch((error) => {
    console.log("Error al crear la tabla Clientes: ", error);
  });

// Para poder usar en otro modulo
module.exports = Costumer;
