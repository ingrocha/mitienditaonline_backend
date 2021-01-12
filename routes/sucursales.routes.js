module.exports = (app) => {
  const sucursales = require("../controllers/sucursales.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, sucursales.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, sucursales.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, sucursales.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, sucursales.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, sucursales.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, sucursales.deleteAll);

  app.use("/api/sucursales", router);
};
