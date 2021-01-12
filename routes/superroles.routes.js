module.exports = (app) => {
  const superRoles = require("../controllers/superroles.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, superRoles.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, superRoles.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, superRoles.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, superRoles.update);

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, superRoles.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, superRoles.deleteAll);

  app.use("/api/superrol", router);
};
