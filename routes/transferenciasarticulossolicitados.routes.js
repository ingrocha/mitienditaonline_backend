module.exports = (app) => {
  const transferenciasarticulossolicitados = require("../controllers/transferenciasarticulossolicitados.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post(
    "/",
    mdAutentificacion.verificaToken,
    transferenciasarticulossolicitados.create
  );

  // Retrieve all Tutorials
  router.get(
    "/",
    mdAutentificacion.verificaToken,
    transferenciasarticulossolicitados.findAll
  );

  // Retrieve a single Tutorial with id
  router.get(
    "/:id",
    mdAutentificacion.verificaToken,
    transferenciasarticulossolicitados.findOne
  );

  // Update a Tutorial with id
  router.put(
    "/:id",
    mdAutentificacion.verificaToken,
    transferenciasarticulossolicitados.update
  );

  // Delete a Tutorial with id
  router.delete(
    "/:id",
    mdAutentificacion.verificaToken,
    transferenciasarticulossolicitados.delete
  );

  // Create a new Tutorial
  router.delete(
    "/",
    mdAutentificacion.verificaToken,
    transferenciasarticulossolicitados.deleteAll
  );

  app.use("/api/transferenciasarticulossolicitados", router);
};
