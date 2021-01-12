module.exports = (app) => {
  const usuarios = require("../controllers/usuarios.controller");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, usuarios.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, usuarios.findAll);

  // Retrieve all Tutorials
  router.get(
    "/activos",
    mdAutentificacion.verificaToken,
    usuarios.findAllActivos
  );

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, usuarios.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, usuarios.update);

  // Update a Tutorial with id
  router.put(
    "/password/:id",
    mdAutentificacion.verificaToken,
    usuarios.updatePassword
  );

  // Delete a Tutorial with id
  router.delete("/:id", mdAutentificacion.verificaToken, usuarios.delete);

  // Create a new Tutorial
  router.delete("/", mdAutentificacion.verificaToken, usuarios.deleteAll);

  app.use("/api/usuario", router);
};
