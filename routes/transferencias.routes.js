module.exports = (app) => {
  const transferencias = require("../controllers/transferencias.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, transferencias.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, transferencias.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, transferencias.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, transferencias.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, transferencias.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, transferencias.deleteAll);

  app.use("/api/transferencias", router);
};
