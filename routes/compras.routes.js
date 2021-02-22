module.exports = (app) => {
  const compras = require("../controllers/compras.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, compras.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, compras.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, compras.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, compras.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, compras.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, compras.deleteAll);

  app.use("/api/compras", router);
};
