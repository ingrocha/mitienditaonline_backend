module.exports = (app) => {
  const transferenciasarticulosautorizados = require("../controllers/transferenciasarticulosautorizados.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post(
    "/",
    mdAutentificacion.verificaToken,
    transferenciasarticulosautorizados.create
  );

  // Retrieve all Tutorials
  router.get(
    "/",
    mdAutentificacion.verificaToken,
    transferenciasarticulosautorizados.findAll
  );

  // Retrieve a single Tutorial with id
  router.get(
    "/:id",
    mdAutentificacion.verificaToken,
    transferenciasarticulosautorizados.findOne
  );

  // Update a Tutorial with id
  router.put(
    "/:id",
    mdAutentificacion.verificaToken,
    transferenciasarticulosautorizados.update
  );

  // Delete a Tutorial with id
  router.delete(
    "/:id",
    mdAutentificacion.verificaToken,
    transferenciasarticulosautorizados.delete
  );

  // Create a new Tutorial
  router.delete(
    "/",
    mdAutentificacion.verificaToken,
    transferenciasarticulosautorizados.deleteAll
  );

  app.use("/api/transferenciasarticulosautorizados", router);
};
