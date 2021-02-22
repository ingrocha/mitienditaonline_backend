module.exports = (app) => {
  const comprasarticulos = require("../controllers/comprasarticulos.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mdAutentificacion.verificaToken, comprasarticulos.create);

  // Retrieve all Tutorials
  router.get("/", mdAutentificacion.verificaToken, comprasarticulos.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", mdAutentificacion.verificaToken, comprasarticulos.findOne);

  // Update a Tutorial with id
  router.put("/:id", mdAutentificacion.verificaToken, comprasarticulos.update);

  // Delete a Tutorial with id
  router.delete(
    "/:id",
    mdAutentificacion.verificaToken,
    comprasarticulos.delete
  );

  // Create a new Tutorial
  router.delete(
    "/",
    mdAutentificacion.verificaToken,
    comprasarticulos.deleteAll
  );

  app.use("/api/comprasarticulos", router);
};
