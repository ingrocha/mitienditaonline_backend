module.exports = (app) => {
  const catalogodepartamento = require("../controllers/catalogodepartamentos.controller.js");
  var mdAutentificacion = require("../middlewares/autenticacion.middlewares");

  var router = require("express").Router();

  // Retrieve a single Tutorial with id
  router.get(
    "/",
    mdAutentificacion.verificaToken,
    catalogodepartamento.findAll
  );

  app.use("/api/catalogodepartamento", router);
};
