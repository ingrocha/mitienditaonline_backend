module.exports = (app) => {
  const articuloskit = require("../controllers/articuloskit.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, articuloskit.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, articuloskit.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, articuloskit.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, articuloskit.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, articuloskit.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, articuloskit.deleteAll);

  app.use("/api/articuloskit", router);
};
