module.exports = (app) => {
  const unidadmedidas = require("../controllers/unidadmedidas.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, unidadmedidas.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, unidadmedidas.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, unidadmedidas.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, unidadmedidas.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, unidadmedidas.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, unidadmedidas.deleteAll);

  app.use("/api/unidadmedidas", router);
};
