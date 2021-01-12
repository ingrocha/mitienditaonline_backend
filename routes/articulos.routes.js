module.exports = (app) => {
  const articulos = require("../controllers/articulos.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, articulos.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, articulos.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, articulos.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, articulos.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, articulos.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, articulos.deleteAll);

  app.use("/api/articulos", router);
};
