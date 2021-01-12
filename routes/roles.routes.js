module.exports = (app) => {
  const roles = require("../controllers/roles.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, roles.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, roles.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, roles.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, roles.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, roles.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, roles.deleteAll);

  app.use("/api/rol", router);
};
