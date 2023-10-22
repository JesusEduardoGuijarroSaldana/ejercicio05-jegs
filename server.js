const express = require("express");
const routesCategories = require("./src/routes/categories.route");
const routesCostumers = require("./src/routes/costumers.route");
const routeSuppliers = require("./src/routes/suppliers.route");
const app = express();
const port = process.env.port || 3000;

// Configuración del servidor
app.use(express.json());
app.use("/partners/v2/categories", routesCategories);
app.use("/partners/v2/costumers", routesCostumers);
app.use("/partners/v2/suppliers", routeSuppliers);
// Ejecutar el serv
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: ", port);
});
