module.exports = (app) => {
  const superUsuarios = require("../controllers/superusuarios.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, superUsuarios.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, superUsuarios.findAll);

  // Retrieve all Tutorials
  router.get(
    "/activos",
    mdAutentificacion.verificaToken,
    superUsuarios.findAllActivos
  );

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, superUsuarios.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, superUsuarios.update);

  // Update a Tutorial with id
  router.put(
    "/password/:id",
    mdAutentificacion.verificaToken,
    superUsuarios.updatePassword
  );

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, superUsuarios.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, superUsuarios.deleteAll);

  app.use("/api/superusuario", router);
};
