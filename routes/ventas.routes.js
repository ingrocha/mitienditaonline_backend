module.exports = (app) => {
  const ventas = require("../controllers/ventas.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, ventas.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, ventas.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, ventas.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, ventas.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, ventas.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, ventas.deleteAll);

  app.use("/api/ventas", router);
};
