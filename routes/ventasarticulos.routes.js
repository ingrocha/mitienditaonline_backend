module.exports = (app) => {
  const ventasarticulos = require("../controllers/ventasarticulos.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, ventasarticulos.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, ventasarticulos.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, ventasarticulos.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, ventasarticulos.update);

  // Delete a Tutorial with id
  router.delete(
    "/:id",
    mdAutentificacion.verificaToken,
    ventasarticulos.delete
  );

  // Create a new Tutorial
  router.delete(
    "/",
    mdAutentificacion.verificaToken,
    ventasarticulos.deleteAll
  );

  app.use("/api/ventasarticulos", router);
};
