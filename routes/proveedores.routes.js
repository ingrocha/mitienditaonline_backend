module.exports = (app) => {
  const proveedores = require("../controllers/proveedores.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, proveedores.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, proveedores.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, proveedores.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, proveedores.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, proveedores.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, proveedores.deleteAll);

  app.use("/api/proveedores", router);
};
