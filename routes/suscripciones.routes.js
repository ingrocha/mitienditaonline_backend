module.exports = (app) => {
  const suscripciones = require("../controllers/suscripciones.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, suscripciones.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, suscripciones.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, suscripciones.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, suscripciones.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, suscripciones.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, suscripciones.deleteAll);

  app.use("/api/suscripciones", router);
};
